export function render(tags) {
    if(tags === null) return "N/D"

    const tags_array = tags.split(",")
    let tags_html = ''

    for(let tag of tags_array) {
        tags_html += `
            <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">${tag}</span>
        `
    }

    return tags_html
}