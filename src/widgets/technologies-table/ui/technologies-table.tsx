'use client'

import React, { useState } from 'react'



import { PlusCircle } from 'lucide-react'
// import { Rating } from './rating-component'
import { Button } from '@/shared/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table'
import { Input } from '@/shared/components/ui/input'
import { Rating } from '@/features/rating'


interface RowData {
    id: number
    name: string
    description: string
    rating: number
}

export function TechnologiesTable() {
    const [data, setData] = useState<RowData[]>([
        { id: 1, name: "Project A", description: "A new web application", rating: 4 },
        { id: 2, name: "Task B", description: "Refactor backend code", rating: 3 },
        { id: 3, name: "Feature C", description: "Implement user authentication", rating: 5 },
    ])

    const handleCellChange = (id: number, field: keyof RowData, value: string | number) => {
        setData(data.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        ))
    }

    const addNewRow = () => {
        const newId = Math.max(...data.map(row => row.id)) + 1
        setData([...data, { id: newId, name: "", description: "", rating: 1 }])
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[25%]">Name</TableHead>
                        <TableHead className="w-[50%]">Description</TableHead>
                        <TableHead className="w-[25%]">Rating</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="font-medium">
                                <Input
                                    value={row.name}
                                    onChange={(e) => handleCellChange(row.id, 'name', e.target.value)}
                                    className="border-none bg-transparent focus:outline-none focus:ring-0"
                                />
                            </TableCell>
                            <TableCell>
                                <Input
                                    value={row.description}
                                    onChange={(e) => handleCellChange(row.id, 'description', e.target.value)}
                                    className="border-none bg-transparent focus:outline-none focus:ring-0"
                                />
                            </TableCell>
                            <TableCell>
                                <Rating
                                    value={row.rating}
                                    onChange={(newValue) => handleCellChange(row.id, 'rating', newValue)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button
                onClick={addNewRow}
                className="mt-4 text-blue-600 hover:text-blue-800"
                variant="ghost"
            >
                <PlusCircle className="w-4 h-4 mr-2" />
                New
            </Button>
        </div>
    )
}

