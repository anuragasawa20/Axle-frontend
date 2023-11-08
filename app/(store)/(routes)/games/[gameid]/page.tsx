import GamePageSlider from "@/components/slider/GamePageSlider";
import { Button } from "@/components/ui/button";
import "../../../styles/gamepage.scss"
import GamePageTabs from "@/components/GamePageTabs";
import { AlertTriangle, Facebook, Instagram, Share, Twitter, Youtube } from "lucide-react";
import GameComments from "@/components/GameComments";
import GameGrid from "@/components/GameGrid";

interface IParams {
  gameid?: string;
}

async function GamePage({ params }: { params: IParams }) {
  const response = await fetch(`https://kind-pear-puffer-tie.cyclic.cloud/api/game/get/${params.gameid}`, {
    cache: 'no-cache'
  });

  const gameData = await response.json();
  const game = gameData.game[0];

  return (
    <div>
      <div className="my-5 flex justify-between items-center">
        <h1>{game.game_name}</h1>
        <Button variant={"landing"} size={"lg"} className="text-2xl px-20 py-7">Play</Button>
      </div>
 <GamePageSlider slideData={game.media} />
      <div className="border-l-2 p-2 m-5">
        <div>
          <p className="text-xl font-semibold">Genres</p>
          <div className="flex gap-2">
            <a>First Person</a>,
            <a>Shooter</a>,
            <a>First Person</a>
          </div>
        </div>
      </div>

      <div className="game-page-body">
        <div>
        <h4 className=" mb-5">
          {game?.summery}
      </h4>
      <div className="my-5">
        <h3>Follow Us</h3>
        <div className="bg-[#201f1fa7] flex p-5 gap-10 justify-center">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
        </div>
      </div>
      <GamePageTabs Desc={game?.game_description}/>

      {/* <div>
      <p>Description: {game.game_description}</p>
          <p>Release Date: {new Date(game.releaseDate).toLocaleDateString()}</p>
          <p>Publisher: {game.publisher}</p>
          <p>Price: ${game.price}</p>
          <h2>Social Handles</h2>
          <ul>
            <li>Discord: {game.social_handles.discord}</li>
            <li>Telegram: {game.social_handles.telegram}</li>
            <li>Twitter: {game.social_handles.twitter}</li>
            <li>Website: {game.social_handles.website}</li>
            <li>YouTube: {game.social_handles.youtube}</li>
            <li>Instagram: {game.social_handles.instagram}</li>
          </ul>
      </div> */}
        </div>
        <div>
          <img src={game?.poster} alt="poster" />
          <div>
            <div className="game-spec">
              <div><b>Publisher:</b> <span>{game?.publisher}</span></div>
              <div><b>Blockchain:</b> <span>{game?.game_blockchain}</span></div>
              <div><b>Release Date:</b> <span>{new Date(game?.releaseDate).toISOString().split('T')[0]}</span></div>
              <div><b>Initial Release:</b> <span>July 21, 2017</span></div>
              <div><b>Platform:</b> <span>Windows</span></div>
              <div><Button variant={"outline"} className="flex gap-2 items-center"><Share size={20} /> Share</Button><Button variant={"outline"}  className="flex gap-2 items-center"><AlertTriangle size={20} /> Report</Button></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Comments</h3>
        <div className="game-page-body">
          <GameComments slug={params.gameid}/>
          <div className="flex flex-col gap-3">
            <GameGrid title={"Sample Game"} imgURL={"https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153250/y7woky0tef7nexccjcov.webp"} id={"number12222"}/>
            <GameGrid title={"Sample Game"} imgURL={"https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153250/y7woky0tef7nexccjcov.webp"} id={"number12222"}/>
            <GameGrid title={"Sample Game"} imgURL={"https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153250/y7woky0tef7nexccjcov.webp"} id={"number12222"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
