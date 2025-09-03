"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { PlayingCard } from "@/components/playing-card"
import { PlayerHand } from "@/components/player-hand"
import { GameControls } from "@/components/game-controls"
import { ScoreBoard } from "@/components/score-board"
import { generateDeck, shuffleDeck, dealCards } from "@/lib/game-utils"

export function TrucoGame() {
  const [gameState, setGameState] = useState({
    deck: shuffleDeck(generateDeck()),
    playerHand: [] as string[],
    opponentHand: [] as string[],
    tableCards: [] as string[],
    playerScore: 0,
    opponentScore: 0,
    currentTurn: "player",
    trucoState: "none", // none, truco, retruco, vale4
  })

  const startNewHand = () => {
    const newDeck = shuffleDeck(generateDeck())
    const { playerCards, opponentCards, remainingDeck } = dealCards(newDeck)

    setGameState({
      ...gameState,
      deck: remainingDeck,
      playerHand: playerCards,
      opponentHand: opponentCards,
      tableCards: [],
      currentTurn: "player",
      trucoState: "none",
    })
  }

  const playCard = (cardIndex: number) => {
    if (gameState.currentTurn !== "player") return

    const newPlayerHand = [...gameState.playerHand]
    const playedCard = newPlayerHand.splice(cardIndex, 1)[0]

    setGameState({
      ...gameState,
      playerHand: newPlayerHand,
      tableCards: [...gameState.tableCards, playedCard],
      currentTurn: "opponent",
    })

    // Simulate opponent's turn after a delay
    setTimeout(() => {
      if (gameState.opponentHand.length > 0) {
        const opponentCardIndex = Math.floor(Math.random() * gameState.opponentHand.length)
        const newOpponentHand = [...gameState.opponentHand]
        const opponentPlayedCard = newOpponentHand.splice(opponentCardIndex, 1)[0]

        setGameState((prevState) => ({
          ...prevState,
          opponentHand: newOpponentHand,
          tableCards: [...prevState.tableCards, opponentPlayedCard],
          currentTurn: "player",
        }))
      }
    }, 1000)
  }

  const callTruco = () => {
    // Simple truco state progression
    const trucoStates = ["none", "truco", "retruco", "vale4"]
    const currentIndex = trucoStates.indexOf(gameState.trucoState)

    if (currentIndex < trucoStates.length - 1) {
      setGameState({
        ...gameState,
        trucoState: trucoStates[currentIndex + 1],
      })
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <ScoreBoard
        playerScore={gameState.playerScore}
        opponentScore={gameState.opponentScore}
        trucoState={gameState.trucoState}
      />

      <Card className="relative min-h-[500px] w-full max-w-4xl bg-gradient-to-b from-green-800 to-green-900 p-6 shadow-xl">
        {/* Opponent's hand (face down) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <PlayerHand cards={gameState.opponentHand} isOpponent={true} />
        </div>

        {/* Table cards */}
        <div className="flex h-48 items-center justify-center gap-4">
          {gameState.tableCards.map((card, index) => (
            <motion.div
              key={`table-${card}-${index}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <PlayingCard card={card} />
            </motion.div>
          ))}
          {gameState.tableCards.length === 0 && (
            <div className="text-center font-truco text-xl text-white opacity-70">
              {gameState.playerHand.length === 0 ? "Presiona 'Nueva Mano' para comenzar" : "Juega una carta"}
            </div>
          )}
        </div>

        {/* Player's hand */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <PlayerHand
            cards={gameState.playerHand}
            isOpponent={false}
            onCardClick={playCard}
            isPlayerTurn={gameState.currentTurn === "player"}
          />
        </div>
      </Card>

      <GameControls
        onNewHand={startNewHand}
        onCallTruco={callTruco}
        trucoState={gameState.trucoState}
        canCallTruco={gameState.playerHand.length > 0 && gameState.trucoState !== "vale4"}
      />
    </div>
  )
}
