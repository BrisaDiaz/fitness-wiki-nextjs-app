export default function DeclaimerText() {
  return (
    <article className="pt-2 px-2 pl-4 pb-4  my-10 shadow-sm border-2 border-gray-100 rounded relative z-10 bg-white mx-auto max-w-3xl">
      <div className="  -mt-12 bg-white px-2 pb-4 max-w-max mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="80px"
          viewBox="0 0 24 24"
          width="auto"
          className="fill-green-200"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <g>
                <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                <polygon points="13,16 11,16 11,18 13,18" />
                <polygon points="13,10 11,10 11,15 13,15" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="` pb-4  text-sm leading-5">
        <p>
          This tool is for use in adults defined as individuals 18 years of age
          or older and not by younger people, or pregnant or breastfeeding
          women.
        </p>
        <br />
        <p>
          This information is not intended to provide medical advice. A health
          care provider who has examined you and knows your medical history is
          the best person to diagnose and treat your health problem.
        </p>
        <br />
        <p>
          If you have specific health questions, please consult your health care
          provider.
        </p>
      </div>
    </article>
  )
}
