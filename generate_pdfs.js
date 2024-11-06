const execSync = require('child_process').execSync;

const hostname = "localhost"
const port = 3001

let pdf_files = require('./pdf_files.json')

if (process.argv.length > 2) {
    pdf_files = [findPdf(process.argv[2])]
}

let sep
if (process.platform === 'win32') {
    sep = '"'
}
else {
    sep = "'"
}

let header = (school, author) => `<span style="font-size:12px!important;width:100%;height:20px;background-color:black;color:white;margin-top:0;margin-bottom:0;margin-left:25px;margin-right:25px;"><div style="display:flex;flex-direction:row;justify-content:space-between;"><span>${school}</span><span>${author}</span></span>`
let footer = (subject) => `<span style="font-size:12px!important;width:100%;height:20px;background-color:black;color:white;margin-top:0;margin-bottom:0;margin-left:25px;margin-right:25px;"><div style="display:flex;flex-direction:row;justify-content:space-between;"><span>${subject}</span><div><span class="pageNumber"></span>/<span class="totalPages"></span></div></div></span>`
const css = "summary:before { display: none; } summary { margin-left: -15px; } article h1 { font-size: 38px!important; } article h2 { font-size: 28px!important; margin-top: 5px!important; page-break-before: always; } article h3 { font-size: 20px!important; } article h4 { font-size: 16px!important; } details, .theme-admonition, .theme-code-block { page-break-inside: avoid; } header + h2 { page-break-before: avoid!important; }"

let pdf_command = (filename, endpoint, cover, title, subtitle, school, author, subject) => {
    const header_string = header(school, author)
    const footer_string = footer(subject)

    return `npx docs-to-pdf --outputPDFFilename=${sep}static/pdf/${filename}${sep} --initialDocURLs=${sep}http://${hostname}:${port}/courses${endpoint}${sep} --excludeURLs=${sep}http://${hostname}:${port}/courses${endpoint}${sep} --contentSelector=${sep}article${sep} --paginationSelector=${sep}a.pagination-nav__link.pagination-nav__link--next${sep} --excludeSelectors=${sep}.margin-vert--xl a,[class^=\"tocCollapsible\"],.breadcrumbs,.theme-edit-this-page${sep} --coverImage=${sep}${cover}${sep} --coverTitle=${sep}${title}${sep} --coverSub=${sep}${subtitle}${sep} --paperFormat=${sep}A4${sep} --pdfMargin=${sep}60,50,60,50${sep} --headerTemplate=${sep}${header_string}${sep} --footerTemplate=${sep}${footer_string}${sep} --cssStyle=${sep}${css}${sep} --restrictPaths`
}

for (const pdf_file of pdf_files) {
    let command = pdf_command(pdf_file.filename, pdf_file.endpoint, pdf_file.cover, pdf_file.title, pdf_file.subtitle, pdf_file.school, pdf_file.author, pdf_file.subject)

    console.log(`Generating ${pdf_file.course} course file inside "${pdf_file.filename}"...`)
    let stdout = execSync(command, { encoding: 'utf-8' })

    console.debug(stdout)

    console.log("Done\n")
}

function findPdf(course_name) {
    for (const pdf_file of pdf_files) {
        if (pdf_file.course === course_name) {
            return pdf_file
        }
    }

    console.error("Course not found")
    process.exit()
}