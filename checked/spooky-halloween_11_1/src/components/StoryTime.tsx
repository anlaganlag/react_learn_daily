import React, { useCallback, useEffect, useState } from 'react'
import './css/storyTime.css'

const initialStoryValues = [
    ['形容词', ''],
    ['形容词', ''],
    ['数字', ''],
    ['可怕的角色', ''],
    ['情绪', ''],
    ['动词', ''],
    ['噪音', ''],
    ['同一个噪音', ''],
    ['动词', ''],
    ['不同的噪音', ''],
    ['形容词', ''],
    ['形容词', ''],
    ['动词', ''],
    ['同一个可怕的角色', ''],
    ['家具', ''],
    ['同一个家具', ''],
    ['糖果', ''],
    ['糖果', ''],
    ['任意生物', ''],
    ['动词', ''],
    ['声音', ''],
    ['烹饪相关的动词', ''],
    ['菜名', ''],
]


const StoryTime = () => {
    const [storyValues, setStoryValues] = useState(initialStoryValues)
    const [showStory, setShowStory] = useState<boolean>(false);
    const [readStory, setReadStory] = useState<boolean>(false);
    const onChangeHandler = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setStoryValues(storyValues.map((row, i) => index === i ? [row[0], e.target.value] : row))
    }
    const wordRow = (word: string[], index: number) => {
        return (
            <div className="WordRow" key={`${word[0]}-${index}`}>
                <span>{word[0]}:</span>
                <input
                    type='text'
                    value={word[1]}
                    onChange={onChangeHandler(index)}
                />
            </div>
        )
    }
    const story = useCallback(() => {
        const mutableStoaryValues = [...storyValues];
        const story = `It was a ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} and ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} Halloween night. ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} children were out
            trick-or-treating, when they came across an old house at the end of the street. The
            rumor in the neighborhood was that ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} haunted the house, and the children were ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}. One very brave trick-or-treater decided to ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} up to the front door and ring the doorbell. ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} they heard the noise from inside the house
            but no one answered. He rang the bell again ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}. Still no answer. Then he realized the door was open.
            He ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} inside, and the door made a loud ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}. The house was,
            ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} and ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}, but the child continued in the house. His friends
            ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} away out of fear, but he was sure that there was no such thing as
            ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}.
            In the living room of the house, there was a big ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} On the ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} sat a big bowl of candy. ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}! ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}! It was a trick-or-treater’s dream come true. But 
            when he went to take a piece, he heard footsteps in the hallway. Then, he noticed a
            shadow. It didn’t look like the shadow of a human, but the shadow of a ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}! 
            He ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} out of the house, tipping over the bowl, which made a loud
            ,
            ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}! As he turned the corner, he heard the creature yell after him: “Stay away,
            little kid! I’ll ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`} you for ${`<mark>${mutableStoaryValues.shift()?.[1]}</mark>`}!`
        return story;
    }, [storyValues])
    const showStoryHandler = () => {
        if (storyValues.filter((value) => value[1].length).length === storyValues.length) {
            setShowStory(true);
            setReadStory(true)
        } else {
            alert('先填写玩表单')
        }
    }
    const synth = window.speechSynthesis;
    useEffect(() => {
        if (readStory) {
            const utterThis = new SpeechSynthesisUtterance(story())
            utterThis.rate = 1.2
            synth.speak(utterThis)
        }
    }, [story, readStory, synth])
    const audioHandler = () => {
        if (readStory) {
            synth.pause();
            setReadStory(false)
        } else {
            setReadStory(true)
        }
    }
    return (
        <div className='StoryTime'>
            <div className="InputsHere">
                <div>词汇表: <button type="button" onClick={showStoryHandler}>展示故事</button></div>
                {storyValues.map((word, index: number) => wordRow(word, index))}
            </div>
            <div className="StoryHere">
                {showStory && <><div>你的故事: <button type="button" onClick={audioHandler}>{readStory ? '暂停' : '播放'}</button></div>
                    <div dangerouslySetInnerHTML={{ __html: story() }} /></>}
            </div>
        </div>
    )
}

export default StoryTime;