import { GameState } from "../HomeMain";

type PlayButtonProps={
    setOnPlay:(value:GameState)=>void;
    id:string;
}

export const PlayButton=  ({setOnPlay,id}:PlayButtonProps)=>{

    return(
        <div className="playBtn">
  <button onClick={()=>{
    setOnPlay({gameOn:true,id:id});
    // console.log("Clickado");
    sessionStorage.setItem('gameId', id);
    }}>
    ¡Jugar! 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
    )
}