import { TextInput } from "@repo/ui/text-input";

export default function (){
    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}>
        <div>
            Chat Room
        </div>
        <div>
            <TextInput size="big" placeholder="chat here"></TextInput>
        </div>
      
    </div>
}