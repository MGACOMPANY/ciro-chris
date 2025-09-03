import { Card } from "@/components/ui/card"

interface ScoreBoardProps {
  playerScore: number
  opponentScore: number
  trucoState: string
}

export function ScoreBoard({ playerScore, opponentScore, trucoState }: ScoreBoardProps) {
  const pointsAtStake = {
    none: 1,
    truco: 2,
    retruco: 3,
    vale4: 4,
  }[trucoState]

  return (
    <Card className="w-full max-w-md bg-black/80 p-4 text-white">
      <div className="flex justify-between">
        <div className="text-center">
          <h3 className="font-truco text-xl">Oponente</h3>
          <p className="text-3xl font-bold">{opponentScore}</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-trucoGold p-4 text-black">
          <span className="text-sm font-bold">En juego</span>
          <span className="text-2xl font-bold">{pointsAtStake}</span>
        </div>

        <div className="text-center">
          <h3 className="font-truco text-xl">Vos</h3>
          <p className="text-3xl font-bold">{playerScore}</p>
        </div>
      </div>

      {trucoState !== "none" && (
        <div className="mt-2 text-center font-truco text-xl text-trucoRed">
          {trucoState === "truco" && "¡TRUCO!"}
          {trucoState === "retruco" && "¡RETRUCO!"}
          {trucoState === "vale4" && "¡VALE CUATRO!"}
        </div>
      )}
    </Card>
  )
}
