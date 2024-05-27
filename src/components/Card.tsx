export interface Candidate {
    id: number,
    nama: string,
    foto: string,
    noUrut: number,
    angkatan: number
}

const Card: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (
        <div className="m-auto border-white border-2 rounded-lg p-3">
            <span className="bg-blue-400 text-4xl rounded-full absolute w-10 text-center">{candidate.noUrut}</span >
            <img src={candidate.foto} style={{width:"250px", height:"400px"}} alt="Foto Kandidat w-full" className="" />
            <h1 className="text-center text-3xl">{candidate.nama}</h1>
            <h2 className="text-center text-2xl">Angkatan : {candidate.angkatan}</h2>
        </div>
    );
}

export default Card 