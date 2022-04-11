
const extensions = ['', '.js', '.ts']

for(const extension of extensions) {
    console.log(`Using extension: ${extension}`)
    try {
        const mod = await import(`./file-to-include${extension}`).then(m => m.default)
        console.log('  Output', mod())
    } catch (ex) {
        console.error('Failed with', ex)
    }
}
       

export {}
