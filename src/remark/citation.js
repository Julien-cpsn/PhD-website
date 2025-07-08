import {visit} from 'unist-util-visit';
import {BibLatexParser, CSLExporter} from "biblatex-csl-converter";
import * as fs from "node:fs";

const plugin = (_options) => {
    return async (ast) => {
        let bibliography = null
        let citations = []

        if (ast.type === 'root' && ast.children[0]?.type === 'yaml') {
            const metadata = ast.children[0]?.value.split("\n")

            for (const header of metadata) {
                if (header.startsWith('bibliography: ')) {
                    let bib_path = header.slice(14, header.length)
                    const bib_file = fs.readFileSync(`blog/${bib_path}`, 'utf8')
                    const bib_parser = new BibLatexParser(bib_file, {processUnexpected: true, processUnknown: true})
                    const bib = bib_parser.parse()
                    let csl = new CSLExporter(bib.entries, null, { useEntryKeys: true })
                    bibliography = csl.parse()
                }
            }
        }

        visit(ast, 'text', (node) => {
            const citation_regex = new RegExp(/@([_\.\-a-zA-Z0-9]+)/g)

            let citation_match = citation_regex.exec(node.value)

            if (citation_match == null) {
                return
            }

            let match_key = citation_match[0]
            let citation_key = citation_match[1]

            if (citation_key[citation_key.length - 1] === '.') {
                citation_key = citation_key.slice(0, -1);
            }

            for (const [key, ref] of Object.entries(bibliography)) {
                if (citation_key === key) {
                    const replaced_key = `[${citations.length + 1}]`
                    node.value = node.value.replace(match_key, replaced_key)

                    let formated_citation = replaced_key + ' '

                    const authors = ref.author
                    for (const [index, author] of authors.entries()) {
                        formated_citation += author.family[0] + '. ' + author.given

                        if (index === authors.length - 2) {
                            formated_citation += ' and '
                        }
                        else if (index === authors.length - 1) {

                        }
                        else {
                            formated_citation += ', '
                        }
                    }

                    const title = ref.title
                        .replaceAll(/<[^>]*>/g, "")
                    formated_citation += `, "${title}"`

                    const place = ref['publisher-place']
                    if (place) {
                        formated_citation += `, ${place}`
                    }

                    formated_citation += `, doi: ${ref.DOI}`

                    citations.push(formated_citation)
                }
            }
        });

        if (citations.length > 0) {
            ast.children.push({
                type: 'heading',
                depth: 2,
                children: [{type: 'text', value: 'References'}]
            })

            const children = citations.map((citation) => {return {
                type: 'listItem',
                spread: false,
                children: [{
                    type: 'paragraph',
                    children: [{type: 'text', value: citation}]
                }]
            }})

            ast.children.push({
                type: 'list',
                ordered: false,
                start: 1,
                spread: false,
                children: children
            })
        }
    };
};

export default plugin;
