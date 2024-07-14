import { InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

interface Option {
    text: string;
    correct?: boolean;
    order?: number;
}

interface Question {
    type: 'options' | 'order' | 'image-options';
    title?: string;
    options?: Option[];
    description?: string;
    image?: string;
}

const CreateActivity: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [activityTitle, setActivityTitle] = useState('');
    const [activityDescription, setActivityDescription] = useState('');

    const addQuestion = () => {
        setQuestions([...questions, { type: 'options', options: [{ text: 'Opción 1', correct: false }] }]);
    };

    const handleTypeChange = (index: number, newType: 'options' | 'order' | 'image-options') => {
        const newQuestions = [...questions];
        newQuestions[index].type = newType;
        if (newType === 'options' || newType === 'image-options') {
            newQuestions[index].options = [{ text: 'Opción 1', correct: false }];
        } else if (newType === 'order') {
            newQuestions[index].options = [{ text: 'Opción 1', order: 1 }];
        } else {
            delete newQuestions[index].options;
        }
        setQuestions(newQuestions);
    };

    const addOption = (index: number) => {
        const newQuestions = [...questions];
        newQuestions[index].options!.push({ text: `Opción ${newQuestions[index].options!.length + 1}`, order: newQuestions[index].options!.length + 1 });
        setQuestions(newQuestions);
    };

    const toggleCorrectness = (qIndex: number, oIndex: number) => {
        const newQuestions = [...questions];
        const option = newQuestions[qIndex].options![oIndex];
        option.correct = !option.correct;
        setQuestions(newQuestions);
    };

    const handleOptionTextChange = (qIndex: number, oIndex: number, newText: string) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options![oIndex].text = newText;
        setQuestions(newQuestions);
    };

    const handleOrderChange = (qIndex: number, oIndex: number, newOrder: number) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options![oIndex].order = newOrder;
        setQuestions(newQuestions);
    };

    const handleTitleChange = (index: number, newTitle: string) => {
        const newQuestions = [...questions];
        newQuestions[index].title = newTitle;
        setQuestions(newQuestions);
    };

    const handleDescriptionChange = (index: number, newDescription: string) => {
        const newQuestions = [...questions];
        newQuestions[index].description = newDescription;
        setQuestions(newQuestions);
    };

    const handleImageUpload = (index: number, file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newQuestions = [...questions];
            newQuestions[index].image = e.target?.result as string;
            setQuestions(newQuestions);
        };
        reader.readAsDataURL(file);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const activityData = {
            title: activityTitle,
            description: activityDescription,
            questions: questions,
        };
        console.log('Formulario enviado:', activityData);
        // Aquí puedes hacer una solicitud a la API para enviar los datos
    };
    return (
        <div className="activity-container">
            <div className="activity-header">
                <label htmlFor="activityTitle" className="activity-title-label">Título</label>
                <input
                    id="activityTitle"
                    type="text"
                    value={activityTitle}
                    onChange={(e) => setActivityTitle(e.target.value)}
                    placeholder="Título de la Actividad"
                    className="activity-input"
                />
                <div className="description-container">
                    <label htmlFor="activityDescription">Descripción</label>
                    <label htmlFor="activityDescription" className="char-counter">{activityDescription.length}/150</label>
                    <textarea
                        id="activityDescription"
                        value={activityDescription}
                        onChange={(e) => setActivityDescription(e.target.value)}
                        placeholder="Descripción de la actividad"
                        maxLength={150}
                        className="activity-textarea"
                    />
                </div>
            </div>
            {questions.map((question, index) => (
                <div className="question-card" key={index}>
                    <div className="question-header">
                        <label htmlFor={`question-title-${index}`} className="question-title-label">Título</label>
                        <input
                            id={`question-title-${index}`}
                            type="text"
                            value={question.title || ''}
                            onChange={(e) => handleTitleChange(index, e.target.value)}
                            placeholder="Título"
                            className="question-title"
                        />
                        <InputLabel id="demo-simple-select-label">Tipo de pregunta</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={question.type}
                            label="Age"
                            onChange={(e) => handleTypeChange(index, e.target.value as 'options' | 'order' | 'image-options')}
                        >
                            <MenuItem value={'options'}>Opciones</MenuItem>
                            <MenuItem value={'order'}>Ordenar</MenuItem>
                            <MenuItem value={'image-options'}>Opciones con imagen</MenuItem>
                        </Select>
                    </div>
                    <div className="description-container">
                        <label htmlFor={`question-description-${index}`}>Descripción</label>
                        <label htmlFor={`question-description-${index}`} className="char-counter">{question.description?.length || 0}/150</label>
                        <textarea
                            id={`question-description-${index}`}
                            value={question.description || ''}
                            onChange={(e) => handleDescriptionChange(index, e.target.value)}
                            placeholder="Descripción"
                            maxLength={150}
                            className="question-description"
                        ></textarea>
                    </div>
                    {question.type === 'options' && (
                        <div className="question-options">
                            <label className="option-label">Opciones</label>
                            {question.options?.map((option, idx) => (
                                <div key={idx} className="option">
                                    <div
                                        className={`correct-indicator ${option.correct ? 'correct' : 'incorrect'}`}
                                        onClick={() => toggleCorrectness(index, idx)}
                                    ></div>
                                    <input
                                        id={`option-text-${index}-${idx}`}
                                        type="text"
                                        value={option.text}
                                        onChange={(e) => handleOptionTextChange(index, idx, e.target.value)}
                                        maxLength={30}
                                        className="option-input"
                                    />
                                </div>
                            ))}
                            <button className="add-option" onClick={() => addOption(index)}>Nueva opción +</button>
                        </div>
                    )}
                    {question.type === 'order' && (
                        <div className="question-options order">
                            <label className="option-label">Opciones</label>
                            {question.options?.map((option, idx) => (
                                <div key={idx} className="option">
                                    <input
                                        id={`option-text-${index}-${idx}`}
                                        type="text"
                                        value={option.text}
                                        onChange={(e) => handleOptionTextChange(index, idx, e.target.value)}
                                        maxLength={30}
                                        className="option-input"
                                    />
                                    <div className="order-input-container">
                                        <input
                                            type="number"
                                            value={option.order}
                                            onChange={(e) => handleOrderChange(index, idx, parseInt(e.target.value))}
                                            className="order-input"
                                            placeholder="1"
                                        />
                                    </div>
                                </div>
                            ))}
                            <button className="add-option" onClick={() => addOption(index)}>Nueva opción +</button>
                        </div>
                    )}
                    {question.type === 'image-options' && (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }} className="question-options-with-image">
                            <Box sx={{
                                width: '100%',
                            }} className="question-options">
                                <label className="option-label">Opciones</label>
                                {question.options?.map((option, idx) => (
                                    <div key={idx} className="option">
                                        <div
                                            className={`correct-indicator ${option.correct ? 'correct' : 'incorrect'}`}
                                            onClick={() => toggleCorrectness(index, idx)}
                                        ></div>
                                        <input
                                            id={`option-text-${index}-${idx}`}
                                            type="text"
                                            value={option.text}
                                            onChange={(e) => handleOptionTextChange(index, idx, e.target.value)}
                                            maxLength={30}
                                            className="option-input"
                                        />
                                    </div>
                                ))}
                                <button className="add-option" onClick={() => addOption(index)}>Nueva opción +</button>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <div className="question-image-upload">
                                    {question.image && <img src={question.image} alt="Vista previa de la imagen" className="image-preview" />}
                                </div>
                                <input
                                    type="file"
                                    id={`upload-${index}`}
                                    className="upload-image"
                                    onChange={(e) => handleImageUpload(index, e.target.files![0])}
                                />
                            <label htmlFor={`upload-${index}`} className="upload-image-button">Subir imagen</label>
                            </Box>
                        </Box>
                    )}
                </div>
            ))}
            <button className="add-question" onClick={addQuestion}>Nueva pregunta +</button>
            <button className="add-question" onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default CreateActivity;
