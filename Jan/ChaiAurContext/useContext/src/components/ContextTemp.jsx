import Card from "./Card";
import ThemeBtn from "./ThemeBtn";

export default function ContextTemp(){

    return(
        <>
            <h1 className="p-4 text-3xl bg-pink-400">Hello Gauav</h1>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex mb-4 justify-end">
                        <ThemeBtn/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}