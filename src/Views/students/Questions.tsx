import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import * as questionsService from '../../Services/Api/ActivitiesService';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Components/Models/shared/Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
// Include Lightbox 
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#gallery--getting-started',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('photoswipe')
});
lightbox.init();
// Interface para la estructura de las opciones
interface Option {
    text: string;
    correct?: boolean;
}

// Interface para la estructura de las preguntas
interface Question {
    type: string;
    title: string;
    description: string;
    options: Option[];
    image?: string;
}

// Interface para los datos del cuestionario
interface QuizData {
    _id: string;
    description: string;
    bannerImg: string;
    questions: Question[];
}

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [data, setData] = useState<QuizData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const { questionId } = useParams();

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);

        if (currentQuestionIndex + 1 < data!.questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setShowResults(false);
    };

    const fetchQuestion = async (id: any) => {
        setIsLoading(true);
        const res = await questionsService.fetchActivityById(id);
        setData(res.data);
        setIsLoading(false);
        return res.data;
    };
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Esto te llevará a la página anterior
    };
    useEffect(() => {
        fetchQuestion(questionId);
    }, [questionId]);

    if (isLoading || !data) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Loader />
            </Box>
        );
    }

    const currentQuestion = data.questions[currentQuestionIndex];
    const correctAnswersCount = answers.filter((answer, index) =>
        data.questions[index].options.find(option => option.text === answer)?.correct
    ).length;

    return (
        <Box sx={{ paddingTop: '32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box onClick={handleGoBack} sx={{
                position: 'absolute',
                top: 100,
                left: 90,
                background: '#82C6C1',
                zIndex: 100,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                cursor: 'pointer'
            }}>
                <ArrowBackIcon sx={{
                    color: '#fff'
                }}></ArrowBackIcon>
            </Box>
            <Box sx={{ borderRadius: '10px', width: '100%', textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" gutterBottom>{data.description}</Typography>
                {!showResults ? (
                    <Box sx={{
                        padding: '42px',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            padding: '24px',
                            borderRadius: '10px',
                            height: '90%',
                        }}>
                            {currentQuestion.type == 'options' && (
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Box sx={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography variant="h2" gutterBottom>{currentQuestion.title}</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '16px',
                                        flexDirection: 'column',
                                        width: '100%',
                                        paddingBottom: '42px'
                                    }}>
                                        <Typography variant="body2" sx={{ marginTop: '20px' }}>{currentQuestionIndex + 1} / {data.questions.length}</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, height: '20%', width: '100%' }}>
                                            {currentQuestion.options.map((option, index) => (
                                                <Button
                                                    key={index}
                                                    variant={answers[currentQuestionIndex] === option.text ? "contained" : "outlined"}
                                                    color={answers[currentQuestionIndex] === option.text ? "primary" : "inherit"}
                                                    onClick={() => handleAnswer(option.text)}
                                                    sx={{
                                                        flex: 1, margin: '0 10px', padding: '10px', width: '100%', py: '32px',
                                                        ":hover": {
                                                            background: '#49437B',
                                                            color: '#fff'
                                                        }
                                                    }}
                                                >
                                                    {option.text}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                            {currentQuestion.type == 'image-options' && (
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Box sx={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                    }}>
                                        <div className="gallery" id='gallery--getting-started'>
                                            <Box sx={{
                                                width: '650px',
                                                height: '330px',
                                                borderRadius: '8px',
                                                background: `url('${currentQuestion!.image}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                position: 'relative',
                                            }}>
                                                <a href={`${currentQuestion!.image}`} data-pswp-width="2500"
                                                    data-pswp-height="1668"
                                                    target="_blank" rel="noreferrer"></a>
                                            </Box>

                                        </div>
                                        <Box sx={{
                                            height: '40%',
                                            marginTop: '20px'
                                        }}>
                                            <Typography variant="h2" gutterBottom>{currentQuestion.title}</Typography>
                                            <Typography variant="body2" sx={{ marginTop: '20px' }}>{currentQuestionIndex + 1} / {data.questions.length}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '16px',
                                        flexDirection: 'column',
                                        width: '30%',
                                        paddingBottom: '42px',
                                        height: '100%',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            flexDirection: 'column',
                                            height: '100%',
                                            width: '100%',
                                            gap: '16px'
                                        }}>
                                            {currentQuestion.options.map((option, index) => (
                                                <Button
                                                    key={index}
                                                    variant={answers[currentQuestionIndex] === option.text ? "contained" : "outlined"}
                                                    color={answers[currentQuestionIndex] === option.text ? "primary" : "inherit"}
                                                    onClick={() => handleAnswer(option.text)}
                                                    sx={{
                                                        flex: 1, margin: '0 10px', padding: '10px', width: '100%', py: '32px',
                                                        ":hover": {
                                                            background: '#49437B',
                                                            color: '#fff'
                                                        }
                                                    }}
                                                >
                                                    {option.text}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                            {currentQuestion.type == 'order' && (
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Box sx={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography variant="h2" gutterBottom>{currentQuestion.title}</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '16px',
                                        flexDirection: 'column',
                                        width: '100%',
                                        paddingBottom: '42px'
                                    }}>
                                        <Typography variant="body2" sx={{ marginTop: '20px' }}>{currentQuestionIndex + 1} / {data.questions.length}</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, height: '20%', width: '100%' }}>
                                            {currentQuestion.options.map((option, index) => (
                                                <Button
                                                    key={index}
                                                    variant={answers[currentQuestionIndex] === option.text ? "contained" : "outlined"}
                                                    color={answers[currentQuestionIndex] === option.text ? "primary" : "inherit"}
                                                    onClick={() => handleAnswer(option.text)}
                                                    sx={{
                                                        flex: 1, margin: '0 10px', padding: '10px', width: '100%', py: '32px',
                                                        ":hover": {
                                                            background: '#49437B',
                                                            color: '#fff'
                                                        }
                                                    }}
                                                >
                                                    {option.text}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{
                        height: '100%',
                    }}>
                        <Box sx={{
                            height: '30vh',
                        }}>
                            <Typography variant="h6" gutterBottom>Resultados</Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                fontWeight: 'bold',
                                fontSize: '42px'
                            }}>
                                {correctAnswersCount} / {data.questions.length}
                            </Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: '#F7F9FC',
                            height: '100%',
                            padding: '24px'
                        }}>
                            <Button onClick={restartQuiz} sx={{ 
                                marginTop: '20px',
                                background: '#49437B',
                                color: '#fff',
                                ":hover":{ 
                                    color: '#000'
                                }
                                }}>Reiniciar cuestionario</Button>
                            <Stack direction={'row'} sx={{ marginTop: '20px' }}>
                                {data.questions.map((question, index) => (
                                    <Box key={index} sx={{
                                        marginBottom: '10px', maxWidth: '350px', width: '300px',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        flexWrap: 'wrap'
                                    }}>
                                        <Typography variant="body1" sx={{
                                            fontSize: '20px',
                                            fontFamily: 'Roboto',
                                        }}>Pregunta {index + 1}</Typography>
                                        <Typography variant="body1" sx={{
                                            textAlign: 'initial',
                                        }}>{question.title}</Typography>
                                        <Stack direction={'row'} gap={'16px'} alignItems={'center'} justifyContent={'flex-start'}>
                                            <Typography variant="body1" sx={{
                                                textAlign: 'initial',
                                            }}><strong>Tu respuesta:</strong></Typography>
                                            <Typography variant="body1"
                                                sx={{
                                                    borderRadius: '10px',
                                                    backgroundColor: question.options.find(option => option.text === answers[index])?.correct ? '#89FF7E' : '#FF6063',
                                                    px: '16px',
                                                    py: '10px'
                                                }}>{answers[index]}</Typography>
                                            {
                                                question.options.find(option => option.text === answers[index])?.correct ?
                                                    (
                                                        <Box sx={{
                                                            background: '#89FF7E',
                                                            borderRadius: '50%',
                                                            padding: '7px 7px 3px 7px'
                                                        }}>
                                                            <CheckIcon sx={{
                                                                color: '#fff'
                                                            }}></CheckIcon>
                                                        </Box>
                                                    ) :
                                                    (
                                                        <Box sx={{
                                                            background: '#FF6063',
                                                            borderRadius: '50%',
                                                            padding: '7px 7px 3px 7px'
                                                        }}>
                                                            <ClearIcon sx={{
                                                                color: '#fff'
                                                            }}></ClearIcon>
                                                        </Box>
                                                    )
                                            }
                                        </Stack>
                                        <Stack direction={'row'} gap={'16px'} alignItems={'center'} justifyContent={'flex-start'}>
                                            <Typography variant="body1" sx={{
                                                textAlign: 'initial',
                                            }}><strong>Respuesta Correcta:</strong></Typography>
                                            <Typography variant="body1" sx={{
                                                borderRadius: '10px',
                                                background: '#49437B',
                                                color: '#fff',
                                                px: '16px',
                                                py: '10px'
                                            }}>{question.options.find(option => option.correct)?.text}</Typography>
                                        </Stack>
                                    </Box>
                                ))}
                            </Stack>

                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

// Datos del cuestionario (ejemplo)
const quizData: QuizData = {
    _id: "669483d991fc62cb2665768c",
    description: "Test de resolución CSS",
    bannerImg: '',
    questions: [
        {
            type: "options",
            title: "¿Cómo declaras una clase?",
            description: "",
            image: 'string',
            options: [
                { text: ".Clase", correct: true },
                { text: "#clase", correct: false },
                { text: "%Clase", correct: false },
                { text: "Clase", correct: false }
            ]
        },
        {
            type: "options",
            title: "¿Cómo seleccionas un ID?",
            description: "",
            options: [
                { text: ".ID", correct: false },
                { text: "#ID", correct: true },
                { text: "%ID", correct: false },
                { text: "ID", correct: false }
            ]
        }
    ]
};

export default Quiz;