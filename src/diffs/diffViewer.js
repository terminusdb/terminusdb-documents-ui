
import React, {useState, useEffect} from "react"
import ReactDiffViewer from 'react-diff-viewer'
import {ButtonGroup, Button, Card, Modal} from "react-bootstrap"
import {AiOutlineSwap, AiOutlineSwapRight, AiOutlineSwapLeft} from "react-icons/ai"
import {BsCheck2Circle} from "react-icons/bs"
import Stack from 'react-bootstrap/Stack'

const DisplayDiff = ({left, right, useDarkTheme, disableWordDiff, leftTitle, rightTitle, showDiffOnly}) => {
    return <ReactDiffViewer 
        oldValue={JSON.stringify(left, null, 2)} 
        newValue={JSON.stringify(right, null, 2)} 
        splitView={true} 
        useDarkTheme={useDarkTheme}
        linesOffset={0}
        leftTitle={leftTitle}
        showDiffOnly={showDiffOnly}
        rightTitle={rightTitle}
        disableWordDiff={disableWordDiff}/>
}

const PatchToolBar = ({left, right, setDisplayRight, setDisplayLeft, variant, textVariant, setShowDiffOnly, showDiffOnly}) => {

    const handleLeftSwap = (e) => {
        setDisplayRight(left)
        setShowDiffOnly(false)
    }

    const handleRightSwap = (e) => {
        setDisplayLeft(right)
        setShowDiffOnly(false)
    }

    return <span>
        <ButtonGroup aria-label="patch tool bar">
            <Button variant={variant} className={textVariant} onClick={handleLeftSwap}>
                Merge <AiOutlineSwapRight className="text-danger"/>
            </Button>
            <Button variant={variant} className={textVariant} onClick={handleRightSwap}>
                Merge <AiOutlineSwapLeft className="text-success"/>
            </Button>
        </ButtonGroup>
        {!showDiffOnly && <>
            <BsCheck2Circle className="text-success"/>
            <small>Click on Patch button, to patch</small>
        </>}
    </span>
}


/**
 * 
 * @param {json} [oldValue] - Old value 
 * @param {json} [newValue] - New value 
 * @param {boolean} [useDarkTheme] - true to use dark theme
 * @param {boolean} [disableWordDiff] - true to enable word diff 
 * @returns - a rect component 
 */

export const DiffViewer = ({oldValue, newValue, useDarkTheme, disableWordDiff, patch, leftTitle, rightTitle}) => {
    const [variant, setVariant] = useState("light")
    const [textVariant, setTextVariant] = useState("text-dark")
    const [displayLeft, setDisplayLeft] = useState(oldValue)
    const [displayRight, setDisplayRight] = useState(newValue)
    const [showDiffOnly, setShowDiffOnly] = useState(true)

    useEffect(() => {
        if(useDarkTheme) {
            setVariant("secondary")
            setTextVariant("text-gray")
        }
    }, [useDarkTheme])

    return <div>
        <Stack direction="horizontal" gap={2}>
            {patch && <PatchToolBar 
                variant={variant}
                textVariant={textVariant}
                left={displayLeft}
                right={displayRight}
                setShowDiffOnly={setShowDiffOnly}
                showDiffOnly={showDiffOnly}
                setDisplayRight={setDisplayRight}
                setDisplayLeft={setDisplayLeft}/>
            }

        </Stack>

        <DisplayDiff left={displayLeft} 
            right={displayRight} 
            leftTitle={leftTitle}
            showDiffOnly={showDiffOnly}
            rightTitle={rightTitle}
            useDarkTheme={useDarkTheme} 
            disableWordDiff={disableWordDiff}/>
    </div>
}