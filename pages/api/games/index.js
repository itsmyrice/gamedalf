const games = [
    {
        id: "1",
        name: 
        {
            value: "Monopoly"
        },
        rank: "5",
        thumbnail: 
        {
            value: "dfsfjdf"
        },
        yearpublished: {
            value: "2000"
        },
    },
    {
        id: "2",
        name: {
            value: "UNO"
        },
        rank: "8",
        thumbnail: 
        {
            value: "dfsfjdfdsc"
        },
        yearpublished: {
            value: "2010"
        },
    },
    {
        id: "3",
        name: {
            value: "Risk"
        },
        rank: "7",
        thumbnail: 
        {
            value: "dfsfjdfsdf"
        },
        yearpublished: {
            value: "2020"
        },
    },
]

export default function handler(request, response) {
    if(request.method === "GET") {
        response.json(games);
    }
}

