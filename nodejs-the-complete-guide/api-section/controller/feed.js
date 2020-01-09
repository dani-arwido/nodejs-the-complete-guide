exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ 
            title: 'First Post',
            content: 'This is the first post!'
        }]
    });
};

exports.postPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        posts: [{ 
            message: 'Post created successfully!',
            post: { 
                id: new Date().toString(), 
                title: title,
                content: content
            }
        }]
    });
};

