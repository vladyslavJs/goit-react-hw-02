import { useEffect } from 'react';
import { useState } from 'react';
import Description from '../Description/Description.jsx'
import Feedback from '../Feedback/Feedback.jsx';
import Notofication from '../Notification/Notification.jsx';
import Options from '../Options/Options.jsx';

export const App = () => {
    const [feedback, setFeedback] = useState(() =>
        JSON.parse(window.localStorage.getItem('saved-feedback')) ??
        {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    );

    useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
    }, [feedback]);

    const onUpdateFeedback = (feedbackType) => {
	setFeedback({
		...feedback,
		[feedbackType]: feedback[feedbackType] + 1
	});
    };
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback = Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100
    );


    const resetFeedback = () => {
        setFeedback ({good: 0, neutral: 0, bad: 0})
    }

    return (
        <>
            < Description />
            < Options
                onUpdate={onUpdateFeedback}
                onReset={resetFeedback}
                total={totalFeedback}
            />
            < Feedback
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={totalFeedback}
                positive = {positiveFeedback}
            />
            < Notofication total={totalFeedback}/>
        </>
    );

}

export default App;




