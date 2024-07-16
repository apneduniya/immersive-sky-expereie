import ContextMenu from "@/components/layout/NavContextMenu";
import { IconPlus } from "@tabler/icons-react";

import Image from "next/image";


export default function ProfilePage() {
    const uploads = [
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh max-w-dvw w-full bg-img-bg-6 bg-cover bg-center px-5 md:px-20 py-10 md:py-20">
                    { /* AVATAR, USERNAME & USER'S ABOUT */}
                    <div className="flex lg:gap-20 w-full lg:flex-row flex-col items-center gap-5">
                        <div className="h-64 w-64 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white overflow-hidden">
                            <Image src={"https://static.vecteezy.com/system/resources/previews/005/545/335/large_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"} height={320} width={320} alt="User avatar" />
                        </div>
                        <div className="py-5 max-w-lg flex flex-col gap-10">
                            <span className="text-bold text-2xl lg:text-left text-center">
                                @jhon_doe
                            </span>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquam aspernatur atque autem beatae commodi consequatur cumque debitis delectus doloremque doloribus ducimus ea eius eligendi eos error est eum ex explicabo facere fugiat fugit harum hic id illum...
                            </p>
                        </div>
                    </div>
                    { /* USER'S UPLOAD */}
                    <div className="mt-10 lg:mt-20">
                        <div className="flex gap-10 items-center">
                            <h2 className="text-2xl font-bold lg:text-left text-center">My Uploads</h2>
                            <IconPlus size={24} className="cursor-pointer" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 gap-y-10 mt-16 place-items-center">
                            {
                                uploads.map((upload, index) => (
                                    <Image key={index} src={upload} height={500} width={500} alt="User upload" className="rounded-lg h-72 w-72 object-cover flex-shrink-0" />
                                ))
                            }
                        </div>
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}