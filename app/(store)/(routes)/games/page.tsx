import GameGrid from '@/components/GameGrid'
import Pagenation from '@/components/Pagenation'

async function Games({searchParams}:any) {

const pageNumber = typeof searchParams.page === 'string' ? Number(searchParams.page): 1;
const search = typeof searchParams.search === 'string' ? searchParams.search: "";


  const res = await fetch(`https://kind-pear-puffer-tie.cyclic.cloud/api/game/getall?pageSize=10`, {
    cache: 'no-cache'
  })

  const games: any = await res.json()

  // const totalPages:number = games.pagination.totalPages;

//  console.log("this is the total page",totalPages)
  return (
    <div>
      <div className='grid-cols-4 grid gap-5'>
        {games.games.map((item: any) => (
          <GameGrid key={item._id} title={item.game_name} category={item.game_blockchain} imgURL={item?.poster} id={item.slug} />
        ))}
        
      </div>
      {/* <Pagenation url={"/games"} pageNumber={pageNumber} totalPages={totalPages} search={search} /> */}
    </div>
  )
}

export default Games