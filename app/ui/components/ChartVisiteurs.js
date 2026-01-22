'use client';

import { memo, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

function ChartVisiteurs({ stats, titre }) {

    if (!stats || Object.keys(stats).length === 0) {
        return <p className="text-gray-500">Aucune visite enregistrée</p>;
    }

    const data = useMemo(() => ({
        labels: Object.keys(stats),
        datasets: [
            {
                label: "Visiteurs",
                data: Object.values(stats),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            }
        ]
    }), [stats]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="flex flex-col w-full max-w-4xl gap-4 h-87.5">
            <h2 className="text-center text-lg font-semibold">{titre}</h2>
            <Bar data={data} options={options} />
        </div>
    );
}

export default memo(ChartVisiteurs);
