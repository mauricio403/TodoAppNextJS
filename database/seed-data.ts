


export const seedData = {
    entries: [
        {
            description: 'Pendiente - Y si bailamos tan solo bailamos?',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En prgreso - Y si bailamos tan solo bailamos?',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Terminada - Y si bailamos tan solo bailamos?',
            status: 'finished',
            createdAt: Date.now() - 10000
        },
    ]
}