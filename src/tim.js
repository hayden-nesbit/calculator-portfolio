

const blogs = Blog.map((post, index) => {
    const questions = post.question.map((question, index) => {
        return (
            <CardTitle>{question}</CardTitle>
        )
    })
    const answers = post.answer.map((answer, index) => {
        return (
            <CardText>{answer}</CardText>
        )
    })

    return (
        <Card key={index}>
            <Cardbody>
                <CardHeader>
                    {post.week}
                </CardHeader>
                {questions}
                {answers}
            </Cardbody>
        </Card>
    )
})