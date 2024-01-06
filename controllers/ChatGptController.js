const OpenAI = require("openai")
const openai = new OpenAI({apiKey: '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'});

const TextGeneration = async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant designed to output JSON.",
            },
            { role: "user", content: "Who won the world series in 2020?" },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    })

    res.status(200).json(messages.push(completion.choices[0].message.content));
}


module.exports = {TextGeneration}