'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const questions = [
    "What item have you lost?",
    "What is the material of the lost item?",
    "What is the color of the lost item?",
    "Is there any logo or distinctive feature on the item?",
]

const LostAndFoundPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState(Array(questions.length).fill(''))
    const [message, setMessage] = useState()

    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers]
        updatedAnswers[currentQuestionIndex] = answer
        setAnswers(updatedAnswers)
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            // Handle case when user clicks "Next" on the last question
            setMessage(
                <>
                    Item Found!
                    <br />
                    Please collect it at the lost and found office at your earliest convenience.
                </>
            )
        }
    }

    const renderQuestion = () => {
        return (
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">{questions[currentQuestionIndex]}</h2>
                <div className="mt-4">
                    <input
                        type="text"
                        className="border p-2 w-full"
                        placeholder="Enter your answer"
                        value={answers[currentQuestionIndex]}
                        onChange={(e) => handleAnswer(e.target.value)}
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <Image src='/images/lost-and-found-logo.png' width={800} height={320} alt='logo' />
            {currentQuestionIndex < questions.length ? renderQuestion() : null}
            {
                message && 
                <>
                <p className="font-bold text-lg my-6">{message}</p>
                <Image src='/images/waterbottle.png' height={300} width={300} alt='water bottle' />
                </>
            }
        </div>
    )
}

export default LostAndFoundPage
