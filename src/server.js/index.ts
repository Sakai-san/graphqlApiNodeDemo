
export const bestScore = (scores:Array<number>):number|null => 
  scores && Array.isArray(scores) && scores.length > 0 && 
  scores.reduce( ( memo, current) => {
    return current >memo  ? current : memo
  }, scores[0]) || null