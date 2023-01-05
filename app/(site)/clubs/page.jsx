import Clubs from "./clubs";

function page() {
  return (
    <div>
      <h1 className="mb-10">welcome to clubs page</h1>
      <div className="flex flex-col gap-4">
        {/* <a className='bg-sky-300' href="/club/1">go to club 1</a>
        <a href="/club/2">go to club 2</a>
        <a href="/club/3">go to club 3</a> */}
        <Clubs />
      </div>

      {/* <button onClick={createClub}>create club</button> */}
    </div>
  );
}

export default page;
