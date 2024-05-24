import Card from "./components/Card";

export interface Candidate {
  id: number,
  nama: string,
  foto: string,
  noUrut: number,
  angkatan: number
}
const candidates: Candidate[] = [
  {
    id: 1,
    nama: "Ultramen Daina",
    foto: "/ultramen1.png",
    noUrut: 1,
    angkatan: 21
  },
  {
    id: 2,
    nama: "Ultramen Orb",
    foto: "/ultramen2.png",
    noUrut: 2,
    angkatan: 22
  },
];

export default function App() {
  return (
    <>
      <header className="w-screen flex items-center p-2 bg-slate-700">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-blue-500" height="42" width="42" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 002-2v-4l-3-3zm-1-5.05l-4.95 4.95-3.54-3.54 4.95-4.95L17 7.95zm-4.24-5.66L6.39 8.66a.996.996 0 000 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 000-1.41L14.16 2.3a.975.975 0 00-1.4-.01z"></path>
        </svg>
        <span className="flex text-3xl gap-2">
          <span className="text-white">Pemilu</span>
          <span className="text-3xl font-bold text-blue-400">PUB</span>
        </span>
      </header>
      <main className="flex flex-col p-3 gap-2 w-screen bg-slate-500">
        <h1 className="text-center text-4xl">Kandidat Pemilu PUB</h1>
        <h1 className="text-center text-2xl">Calon Ketua Dan Keamanan</h1>
        <div className="flex">
          {candidates.map((candidate) => (
            <Card key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </main>
      <footer className="p-3 bg-slate-700">
        <div className="text-3xl text-center text-white">
          &copy;Pemberdayaan Ummat Berkelanjutan
        </div>
      </footer>
    </>
  );
}