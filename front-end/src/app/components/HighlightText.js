// function inspired from https://www.nocarnoproblem.net/
export function HighlightText(text, query) {
    if (text != null) {
      const regex = new RegExp(`(${query})`, 'gi');
      const highlightedText = text.toString().replace(regex, '<span style="padding: 0; background-color: #6eb1ca;">$1</span>');
      return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    }
  }