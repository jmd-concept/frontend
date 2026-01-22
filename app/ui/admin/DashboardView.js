
'use client'

import { useEffect, useState } from "react";
import ChartVisiteurs from "../components/ChartVisiteurs";

export default function DashboardView() {
    const [stats, setStats] = useState({
        jour: {},
        mois: {},
        annee: {},
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/visiteur")
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(error => {
                setStats({ jour: {}, mois: {}, annee: {} });
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement de données...</p>;
    }

    return (
        <div className="mt-12 p-12 flex flex-col items-center gap-10">
            <h1 className="text-2xl font-bold">📊 Dashboard Admin</h1>

            {/* Résumé */}
            {stats &&
                <div className="flex gap-x-12">
                    <Stat label="Visite/Jours" value={Object.keys(stats.jour).length} />
                    <Stat label="Visite/Mois" value={Object.keys(stats.mois).length} />
                    <Stat label="Visite/Années" value={Object.keys(stats.annee).length} />
                </div>
            }

            {/* Graphiques */}
            <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-x-16">
                {Object.keys(stats.jour).length > 0 && (
                    <ChartVisiteurs stats={stats.jour} titre="Visites par jour" />
                )}
                {Object.keys(stats.mois).length > 0 && (
                    <ChartVisiteurs stats={stats.mois} titre="Visites par mois" />
                )}
                {Object.keys(stats.annee).length > 0 && (
                    <ChartVisiteurs stats={stats.annee} titre="Visites par année" />
                )}
            </div>
        </div>
    );
}

function Stat({ label, value }) {
    return (
        <div className="text-center bg-gray-100 px-12 py-4 rounded shadow">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
}