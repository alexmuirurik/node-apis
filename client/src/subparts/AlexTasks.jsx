import React from 'react'

const AlexTasks = (props) => {
    if(!props.data) return
    return (
        props.data.map((post, i) => 
            <tr>
                <td class="border-end"><small class="p-0">{i + 1}</small></td>
                <td class="w-50" ><small class="title"><a href={post.link} target='_blank'>{post.title.rendered}</a></small></td>
                <td class=""><small class="text-muted text-small" id="310">{post.content.rendered.split(' ').length} Words</small> </td>
                <td class=""><small class="text-muted"><strong></strong> </small></td>
                <td class=""><small class="text-muted"> {post.status} </small></td>
                <td class=""><small class="text-muted text-small" id="310"> {post.date}</small></td>
            </tr>
        )
    )
}

export default AlexTasks