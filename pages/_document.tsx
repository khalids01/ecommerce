import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    constructor(props: any) {
        super(props);
        this.state = {
            bgImg: `/assets/images/bg/bg.jpg`
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet" />
                </Head>
                <body
                    style={{
                        backgroundImage: `url(${this.state.bgImg})`
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
