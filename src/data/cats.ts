export interface Cat{
    nama: string;
    file: string;
    id: number;
}

const cats: Cat[] = [
    {
        nama: 'Cipa',
        file: '/assets/img/cipa.png',
        id: 0
    },
    {
        nama: 'Cipo',
        file: '/assets/img/cipo.png',
        id: 1
    },
    {
        nama: 'Kuro',
        file: '/assets/img/kuro.png',
        id: 2
    },
    {
        nama: 'UPBJJ',
        file: '/assets/img/upbjj jakarta.png',
        id: 3
    },
];

export const getCats = () => cats;
export const getCat = (id: number) => cats.find(m => m.id === id);
