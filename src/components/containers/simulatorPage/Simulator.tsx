"use client";

import { useState } from "react";
import Image from "next/image";
import { links } from "@/libs/constants";
import { CtaButton } from "@/components/ui/CtaButton";
import { BugIcon } from "@/components/ui/icons/BugIcon";

const questions = [
    {
        id: 1,
        text: "Avez-vous un CTO ou un responsable technique identifié ?",
        answers: [
            { text: "Oui, à temps plein", points: 2 },
            {
                text: "Oui, mais il porte aussi d'autres casquettes",
                points: 1,
                comment:
                    "Un responsable technique dilué prend des décisions structurantes entre deux réunions. Les mauvais choix s'accumulent sans que personne ne soit vraiment responsable.",
            },
            {
                text: "Non",
                points: 0,
                comment:
                    "Sans pilote technique identifié, les décisions de priorisation se prennent par défaut - rarement dans le bon sens.",
            },
        ],
    },
    {
        id: 2,
        text: "Quand votre équipe technique s'engage sur une date de livraison, à quelle fréquence est-elle tenue ?",
        answers: [
            { text: "Presque toujours", points: 2 },
            {
                text: "Une fois sur deux",
                points: 1,
                comment:
                    "Un engagement sur deux non tenu, c'est une roadmap business construite sur du sable - et des décisions commerciales prises sur de mauvaises hypothèses.",
            },
            {
                text: "Rarement ou jamais",
                points: 0,
                comment:
                    "Des dates systématiquement manquées signalent un problème d'estimation, de scope ou de décisions passées qui ralentissent tout - les trois se règlent, mais pas sans diagnostic.",
            },
        ],
    },
    {
        id: 3,
        text: "Savez-vous dire combien coûte votre équipe technique par fonctionnalité livrée ?",
        answers: [
            { text: "Oui, on le mesure", points: 2 },
            {
                text: "À peu près",
                points: 1,
                comment:
                    "Une visibilité approximative sur les coûts tech rend difficile toute décision éclairée sur ce qu'il faut prioriser ou couper.",
            },
            {
                text: "Aucune idée",
                points: 0,
                comment:
                    "Votre équipe technique est probablement l'un de vos postes de coût les plus élevés. Ne pas savoir ce qu'elle produit en retour, c'est piloter sans tableau de bord.",
            },
        ],
    },
    {
        id: 4,
        text: "À quelle fréquence votre produit est-il mis à jour en production ?",
        answers: [
            { text: "Plusieurs fois par jour ou par semaine", points: 2 },
            {
                text: "Quelques fois par mois",
                points: 1,
                comment:
                    "Une cadence mensuelle allonge le cycle de feedback produit et réduit votre capacité à réagir rapidement aux signaux du marché.",
            },
            {
                text: "Moins souvent ou je ne sais pas",
                points: 0,
                comment:
                    "Livrer rarement est souvent le symptôme d'un code qui résiste aux changements ou d'une organisation qui freine l'équipe.",
            },
        ],
    },
    {
        id: 5,
        text: "Quand un problème technique survient en production, comment l'apprenez-vous ?",
        answers: [
            { text: "L'équipe le détecte avant les utilisateurs", points: 2 },
            {
                text: "Les utilisateurs nous préviennent",
                points: 1,
                comment:
                    "Apprendre les incidents par vos utilisateurs, c'est laisser votre réputation produit dépendre de votre chance plutôt que de vos process.",
            },
            {
                text: "On découvre le problème après coup",
                points: 0,
                comment:
                    "Découvrir les incidents après coup signifie que vous n'avez aucun filet. Chaque mise en ligne est un pari sur la stabilité.",
            },
        ],
    },
    {
        id: 6,
        text: 'Votre équipe technique passe-t-elle du temps à "refaire" des choses déjà construites ?',
        answers: [
            { text: "Rarement", points: 2 },
            {
                text: "Régulièrement",
                points: 1,
                comment:
                    "Refaire régulièrement ce qui a déjà été construit, c'est payer deux fois pour la même fonctionnalité - et ralentir tout le reste.",
            },
            {
                text: "C'est un sujet de tension permanent",
                points: 0,
                comment:
                    "Quand les corrections du passé deviennent un sujet de tension permanent, elles ne consomment plus seulement du temps - elles consomment de l'énergie managériale.",
            },
        ],
    },
    {
        id: 7,
        text: "Comment qualifieriez-vous la communication entre votre équipe technique et le reste de l'entreprise ?",
        answers: [
            { text: "Fluide et régulière", points: 2 },
            {
                text: "Ça dépend des sujets",
                points: 1,
                comment:
                    "Une communication technique à géométrie variable crée des incompréhensions qui se transforment en mauvaises décisions produit - souvent sans que personne s'en rende compte sur le moment.",
            },
            {
                text: "On a du mal à se comprendre",
                points: 0,
                comment:
                    "Quand tech et métier ne se comprennent pas, les priorités divergent. Personne ne livre ce dont le business a réellement besoin.",
            },
        ],
    },
    {
        id: 8,
        text: "Avez-vous une vision claire de ce qui sera livré dans les 3 prochains mois ?",
        answers: [
            { text: "Oui, c'est documenté et partagé", points: 2 },
            {
                text: "En partie",
                points: 1,
                comment:
                    "Une roadmap partiellement documentée, c'est une équipe qui avance sans cap stable - les changements de priorité se multiplient et l'équipe perd en efficacité.",
            },
            {
                text: "Non, ça change tout le temps",
                points: 0,
                comment:
                    "Sans visibilité sur les 3 prochains mois, votre équipe subit les changements de priorité plutôt que de les anticiper. Passer d'un sujet à l'autre en permanence tue la productivité.",
            },
        ],
    },
    {
        id: 9,
        text: "Si votre développeur le plus expérimenté partait demain, quel serait l'impact ?",
        answers: [
            { text: "Gérable, le savoir est partagé", points: 2 },
            {
                text: "Problématique mais survivable",
                points: 1,
                comment:
                    "Un départ problématique mais survivable, c'est un risque connu et accepté - souvent à tort, jusqu'au jour où il se matérialise au mauvais moment.",
            },
            {
                text: "Critique, il est le seul à savoir faire certaines choses",
                points: 0,
                comment:
                    "Quand une personne détient des connaissances critiques non documentées, votre business dépend de sa disponibilité, de sa loyauté et de sa santé.",
            },
        ],
    },
    {
        id: 10,
        text: "Sur une échelle de 1 à 10, à quel point comprenez-vous ce que fait votre équipe technique au quotidien ?",
        answers: [
            { text: "8 à 10 — j'ai une bonne visibilité", points: 2 },
            {
                text: "5 à 7 — je suis les grandes lignes",
                points: 1,
                comment:
                    "Une compréhension partielle du quotidien tech vous empêche de distinguer une vraie avancée d'une roue qui tourne - et de poser les bonnes questions.",
            },
            {
                text: "1 à 4 — c'est souvent flou pour moi",
                points: 0,
                comment:
                    "Ne pas comprendre ce que fait votre équipe au quotidien, c'est piloter à l'aveugle l'une des lignes de coût les plus importantes de votre entreprise.",
            },
        ],
    },
];

type Zone = "vert" | "orange" | "rouge";

function getZone(score: number): Zone {
    if (score >= 16) return "vert";
    if (score >= 10) return "orange";
    return "rouge";
}

function getResult(score: number, hasCtoFullTime: boolean) {
    const zone = getZone(score);

    if (zone === "vert") {
        return {
            zone,
            label: "Zone verte",
            headline: "Votre tech est structurée.",
            body: "Les signaux sont bons. Votre intuition de vouloir vérifier est saine - pas parce que quelque chose cloche, mais parce qu'une décision importante mérite un deuxième avis. Un échange de 30 minutes suffit souvent.",
            cta: "Échanger sur un point précis",
            bgColor: "bg-brand-green/10",
            borderColor: "border-brand-green",
            dot: "bg-brand-green",
        };
    }

    if (zone === "orange") {
        return {
            zone,
            label: "Zone orange",
            headline: "Votre intuition est juste.",
            body: "Quelque chose cloche - même si votre CTO vous dit que tout va bien. Ces signaux ne sont pas encore critiques, mais ils deviennent des problèmes business si rien ne change. Un audit de 2 à 3 semaines permet d'identifier précisément où ça coince.",
            cta: "Parlons-en",
            bgColor: "bg-brand-red/10",
            borderColor: "border-brand-red",
            dot: "bg-brand-red",
        };
    }

    // Zone rouge — bifurcation Cas A / Cas B
    if (hasCtoFullTime) {
        return {
            zone,
            label: "Zone rouge",
            headline: "Votre tech freine votre business.",
            body: "Vous avez un CTO, mais les signaux sont là. Un regard extérieur n'est pas un jugement sur lui - c'est un deuxième avis qui l'aide autant que vous. Plus vous attendez, plus ça coûte.",
            cta: "Prenons 30 minutes",
            bgColor: "bg-brand-red/10",
            borderColor: "border-brand-red",
            dot: "bg-brand-red",
        };
    }

    return {
        zone,
        label: "Zone rouge",
        headline: "Votre tech freine votre business.",
        body: "Vous avez pris des décisions techniques seul, sans filet. Certaines étaient probablement les bonnes. D'autres ont créé des problèmes qui s'accumulent. Un audit permet de faire le tri - et de décider quoi faire dans quel ordre.",
        cta: "Prenons 30 minutes",
        bgColor: "bg-brand-giants/10",
        borderColor: "border-brand-giants",
        dot: "bg-brand-giants",
    };
}

const IS_DEV = process.env.NODE_ENV === "development";

// Réponses prédéfinies pour chaque scénario de test
const DEV_SCENARIOS: { label: string; answers: number[] }[] = [
    { label: "Vert (20/20)", answers: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
    { label: "Orange (12/20)", answers: [1, 1, 1, 1, 2, 1, 1, 1, 1, 2] },
    { label: "Rouge + CTO (2/20)", answers: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { label: "Rouge + sans CTO (0/20)", answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
];

export function Simulator() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [finished, setFinished] = useState(false);

    const question = questions[currentQuestion];
    const progress = (currentQuestion / questions.length) * 100;
    const isLast = currentQuestion === questions.length - 1;

    function handleSelect(points: number) {
        setSelectedAnswer(points);
    }

    function handleNext() {
        if (selectedAnswer === null) return;
        const newAnswers = [...answers, selectedAnswer];
        setAnswers(newAnswers);
        setSelectedAnswer(null);

        if (isLast) {
            setFinished(true);
        } else {
            setCurrentQuestion((q) => q + 1);
        }
    }

    function devSkipToResult() {
        const random = Array.from({ length: questions.length }, () => Math.floor(Math.random() * 3));
        setAnswers(random);
        setFinished(true);
    }

    function devLoadScenario(scenarioAnswers: number[]) {
        setAnswers(scenarioAnswers);
        setFinished(true);
    }

    function handleReset() {
        setCurrentQuestion(0);
        setAnswers([]);
        setSelectedAnswer(null);
        setFinished(false);
    }

    if (finished) {
        const score = answers.reduce((sum, v) => sum + v, 0);
        const hasCtoFullTime = answers[0] === 2;
        const result = getResult(score, hasCtoFullTime);

        return (
            <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
                <div className={`flex flex-col gap-6 p-8 rounded-2xl border ${result.bgColor} ${result.borderColor}`}>
                    <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full shrink-0 ${result.dot}`} />
                        <span className="font-brico-gro font-bold text-sm uppercase tracking-widest text-brand-fine-blue">
                            {result.label}
                        </span>
                    </div>

                    <div className="flex items-end gap-3">
                        <span className="font-brico-gro font-extrabold text-6xl leading-none text-brand-midnight">
                            {score}
                        </span>
                        <span className="font-brico-gro text-xl text-brand-fine-blue pb-1">/ 20</span>
                    </div>

                    <p className="font-brico-gro font-bold text-xl text-brand-midnight">{result.headline}</p>
                    <p className="text-brand-fine-blue leading-relaxed">{result.body}</p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-2 items-start">
                        <CtaButton href={links.zcal} target="_blank" rel="noopener noreferrer">
                            {result.cta}
                        </CtaButton>
                        <button
                            onClick={handleReset}
                            className="text-sm text-brand-fine-blue underline underline-offset-4 hover:text-brand-midnight transition-colors cursor-pointer self-center"
                        >
                            Recommencer
                        </button>
                    </div>
                </div>

                {/* DEV ONLY */}
                {IS_DEV && (
                    <div className="border border-dashed border-brand-silver/50 rounded-xl p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <BugIcon width="14" height="14" className="text-brand-silver" />
                            <p className="text-xs font-brico-gro uppercase tracking-widest text-brand-silver">Dev — scénarios</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {DEV_SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.label}
                                    onClick={() => devLoadScenario(scenario.answers)}
                                    className="cursor-pointer text-xs px-3 py-1.5 rounded-full border border-brand-silver/40 text-brand-fine-blue hover:border-brand-midnight hover:text-brand-midnight transition-colors"
                                >
                                    {scenario.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <p className="text-xs font-brico-gro uppercase tracking-widest text-brand-silver">
                        Détail des réponses
                    </p>
                    {questions.map((q, i) => {
                        const score = answers[i];
                        const chosenAnswer = q.answers.find((a) => a.points === score);
                        const comment = chosenAnswer && "comment" in chosenAnswer ? chosenAnswer.comment : undefined;

                        return (
                            <div key={q.id} className="flex gap-3 items-start text-sm">
                                <span
                                    className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                                        score === 2
                                            ? "bg-brand-lime/30 text-brand-midnight"
                                            : score === 1
                                              ? "bg-brand-giants/20 text-brand-midnight"
                                              : "bg-brand-giants/40 text-brand-midnight"
                                    }`}
                                >
                                    {score}
                                </span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm text-brand-fine-blue leading-snug">{q.text}</span>
                                    {chosenAnswer && (
                                        <span className="text-sm font-semibold text-brand-midnight">
                                            → {chosenAnswer.text}
                                        </span>
                                    )}
                                    {comment && (
                                        <div className="flex gap-3 items-start mt-1 rounded-r-lg border-l-2 border-brand-giants bg-brand-light-beige px-3 py-2.5">
                                            <Image
                                                src="/images/profile-picture.jpeg"
                                                alt="Adrien Blandin"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5"
                                            />
                                            <p className="text-sm text-brand-fine-blue leading-relaxed">{comment}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs text-brand-silver font-brico-gro">
                    <span>
                        Question {currentQuestion + 1} sur {questions.length}
                    </span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-brand-light-beige overflow-hidden">
                    <div
                        className="h-full rounded-full bg-brand-giants transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <p className="font-brico-gro font-bold text-xl md:text-2xl text-brand-midnight leading-snug">
                {question.text}
            </p>

            {/* Answers */}
            <div className="flex flex-col gap-3">
                {question.answers.map((answer, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelect(answer.points)}
                        className={`cursor-pointer text-left px-5 py-4 rounded-xl border-2 text-sm md:text-base transition-all duration-150 ${
                            selectedAnswer === answer.points
                                ? "border-brand-giants bg-brand-giants/10 text-brand-midnight font-semibold"
                                : "border-brand-silver/40 bg-white/60 text-brand-fine-blue hover:border-brand-giants/60 hover:bg-brand-giants/5"
                        }`}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>

            {/* Next */}
            <div className="flex justify-end">
                <CtaButton onClick={handleNext} disabled={selectedAnswer === null}>
                    {isLast ? "Voir mon résultat" : "Question suivante"}
                </CtaButton>
            </div>

            {/* DEV ONLY */}
            {IS_DEV && (
                <div className="border border-dashed border-brand-silver/50 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-silver">
                            <path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><rect width="8" height="14" x="8" y="6" rx="5"/><path d="M19 7 22 4"/><path d="m5 7-3-3"/><path d="M19 19c-2 0-3-1-3-3v-4"/><path d="M5 19c2 0 3-1 3-3v-4"/><path d="M8 13H5"/><path d="M19 13h-3"/><path d="M8 19H4"/><path d="M20 19h-4"/><line x1="12" y1="20" x2="12" y2="22"/>
                        </svg>
                        <p className="text-xs font-brico-gro uppercase tracking-widest text-brand-silver">Dev</p>
                    </div>
                    <button
                        onClick={devSkipToResult}
                        className="cursor-pointer text-left text-sm text-brand-fine-blue underline underline-offset-4 hover:text-brand-midnight transition-colors"
                    >
                        Sauter au résultat (réponses aléatoires)
                    </button>
                </div>
            )}
        </div>
    );
}
