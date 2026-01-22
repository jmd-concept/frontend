import { Op, fn, col, literal } from "sequelize";
import { Visiteur, initDB } from "../../lib/db/index";
import { NextResponse } from "next/server";

export async function GET() {
    await initDB();

    const rows = await Visiteur.findAll({
        attributes: [
            "visite_date",
            [fn("COUNT", col("id")), "total"],
            [fn("strftime", "%m", fn("date", col("visite_date"))), "mois"],
            [fn("strftime", "%Y", fn("date", col("visite_date"))), "annee"],
        ],
        group: [
            "visite_date",
            literal("mois"),
            literal("annee")
        ],
        order: [["visite_date", "ASC"]],
        raw: true,
    });

    const jour = {};
    const mois = {};
    const annee = {};

    rows.forEach(r => {
        jour[r.visite_date] = Number(r.total);
        const keyMois = `${r.annee}-${r.mois}`;
        mois[keyMois] = (mois[keyMois] || 0) + Number(r.total);
        annee[r.annee] = (annee[r.annee] || 0) + Number(r.total);
    });

    return NextResponse.json({ jour, mois, annee });
}

export async function POST() {
    await initDB();
    await Visiteur.create({
        visite_date: new Date().toISOString().split("T")[0]
    });
    return NextResponse.json({ success: true });
}
