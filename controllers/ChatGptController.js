const OpenAI = require("openai")
const openai = new OpenAI({apiKey: 'Your API KEY GOES HERE'});

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