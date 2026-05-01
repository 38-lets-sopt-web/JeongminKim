function useCellClick({
  isPlaying,
  cells,
  setCells,
  setScore,
  setSuccess,
  setFail,
  setMessage,
}) {
  const handleCellClick = (index) => {
    if (!isPlaying) return;
    const cell = cells[index];
    if (!cell.type) return;

    if (cell.type === "mole") {
      setScore((prev) => prev + 1);
      setSuccess((prev) => prev + 1);
      setMessage("성공! +1점");
      setCells((prev) =>
        prev.map((c, i) => (i === index ? { type: "mole-hit" } : c))
      );
      setTimeout(() => {
        setCells((prev) =>
          prev.map((c, i) => (i === index ? { type: null } : c))
        );
      }, 700);
    } else if (cell.type === "bomb") {
      setScore((prev) => prev - 1);
      setFail((prev) => prev + 1);
      setMessage("폭탄! -1점");
      setCells((prev) =>
        prev.map((c, i) => (i === index ? { type: null } : c))
      );
    }
  };

  return { handleCellClick };
}

export default useCellClick;
