export default function HTMLRenderer({content, className, block}: {content: string, className?: string, block?: boolean}) {
  return (
    <>
      {!block ? (
        <span className={className} dangerouslySetInnerHTML={{__html: content}} />
      ) : (
        <div className={className} dangerouslySetInnerHTML={{__html: content}} />
      )}
    </>
  )
}