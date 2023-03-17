import Head from "next/head"
import Header from "../../components/Header"
import Image from "next/legacy/image"

export default function Item() {
    return(
        <div>
            <Head>
                <title>ScrollCom</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main>
                <Header />
                <div className="h-full w-full bg-[#282828]/5 flex justify-center items-center py-5">
                    <div className="max-w-[750px] lg:max-w-4xl xl:max-w-6xl w-full flex justify-between items-center bg-white">
                        <div className="w-full flex justify-center space-x-[40px] p-5">
                            <div>
                                <div className="w-[275px] xl:w-[350px] xl:h-[325px] h-[225px] relative">
                                    <Image src={"/image.jpg"} layout="fill" />
                                </div>
                            </div>
                            <div className="w-[500px] space-y-5">
                                <h2 className="text-2xl">Fngeen Men{"'"}s Luxury Diamond Waterproof Quartz Watch - Gold</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur odit tempore 
                                    nemo delectus, error ipsa esse omnis? Dignissimos consequuntur perspiciatis harum minus 
                                    tempora eligendi unde voluptates. Autem, ipsum voluptates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}