/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HighlightI {
    type?: string;
    highlight: string;
    picked?: boolean;
    extraTailwindCss?: string;
    ClickHandler?: () => void;
}

function Highlight({
  highlight, picked, extraTailwindCss, ClickHandler,
  type,
}: HighlightI) {
  const [selected, setSelected] = useState<boolean>(picked);
  function HandleClick() {
    setSelected(!selected);
    if (ClickHandler) {
      ClickHandler();
    }
  }

  useEffect(() => {
    setSelected(false);
  }, [type]);
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => HandleClick()}
      type="button"
      className={`px-4 py-3 text-sm rounded-full ${!selected ? 'bg-highlight-no-selected text-drop-grey' : 'bg-highligh-selected text-drop-white'} ${extraTailwindCss}`}
    >
      {highlight}

    </motion.button>
  );
}

Highlight.defaultProps = {
  extraTailwindCss: '',
  picked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ClickHandler: () => {},
  type: '',
};

export default Highlight;
