const execSync = require('child_process').execSync
const fs = require('fs')


const base_dir = './docs'
const translation_output_dir = './i18n/en/docusaurus-plugin-content-docs/current'

const file_list = execSync(`find ${base_dir} -type f`).toString().split(`\n`)

for (const file_path of file_list) {
    if (file_path.length === 0 || !(file_path.endsWith('.md') || file_path.endsWith('.mdx') || file_path.endsWith('.json'))) {
        continue;
    }

    let translated_file_path = translation_output_dir + file_path.substring(6);
    let translated_file_dir = translated_file_path.substring(0, translated_file_path.lastIndexOf("/"));

    console.log(`Translating ${file_path} into ${translated_file_path}`)


    if (fs.existsSync(translated_file_path)) {
        console.log('\tFile exists, skipping')
        continue
    }

    fs.mkdirSync(translated_file_dir, { recursive: true })

    //console.log(`chatgpt-md-translator ${file_path} -o ./${translated_file_path}`)
    const output = execSync(`chatgpt-md-translator ${file_path} -o ${translated_file_path}`)

    console.log(output)
    console.log(`\tDone`)
}