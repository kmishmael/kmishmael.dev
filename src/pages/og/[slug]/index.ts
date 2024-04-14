import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';


interface Props {
    params: { slug: string };
    props: { post: any };
}

export async function GET({ params, props }) {


    const DmSansBold = fs.readFileSync(path.resolve('./src/fonts/DMSans-Bold.ttf'));
    const DmSansReqular = fs.readFileSync(
        path.resolve('./src/fonts/DMSans-Regular.ttf'),
    );

    // post cover with Image is pretty tricky for dev and build phase
    const html = {
        type: 'div',
        props: {
            children: [
                {
                    type: 'div',
                    props: {
                        tw: 'flex font-bold mx-[120px]',
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '96px',
                                        color: 'white',
                                        fontFamily: 'DM Sans Bold',
                                    },
                                    children: props.frontmatter.title,
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        tw: 'absolute flex bottom-10 right-12',
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '24px',
                                        color: 'white',
                                        fontFamily: 'DM Sans Bold',
                                    },
                                    children: new Date(props.frontmatter.pubDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit",
                                      }),
                                },
                            },
                        ],
                    },
                },
            ],
            tw: 'w-full h-full flex items-center relative bg-contain',
            style: {
                fontFamily: 'DM Sans Regular',
                backgroundImage: 'url(https://kmishmael.tech/images/og-background.png)',
                backgroundSize: 'contain',
            },
        },
    };

    return new ImageResponse(html as any, {
        width: 1920,
        height: 1080,
        fonts: [
            {
                name: 'DM Sans Bold',
                data: DmSansBold.buffer,
                style: 'normal',
            },
            {
                name: 'DM Sans Regular',
                data: DmSansReqular.buffer,
                style: 'normal',
            },
        ],
    });

}

export async function getStaticPaths() {

    // @ts-expect-error
    const blogPosts = import.meta.glob("../../blog/*.md");
    let posts: any[] = []
    for (let path of Object.keys(blogPosts)) {
        let b = await blogPosts[path]()
        let post = {
            params: {slug: b.url.split('/')[b.url.split('/').length - 1]},
            props: b,
        }
        console.log(post)
        posts.push(post)
    }
    // return blogPosts.map((post) => ({
    //     params: { slug: post.slug },
    //     props: { post },
    // }));
    return posts
}