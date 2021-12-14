export default function DesclaimerText() {
  return (
    <article className="pt-2 px-4 pb-4  my-16 shadow-sm border-2 border-gray-100 rounded relative z-10 bg-white mx-auto max-w-3xl">
      <div className="w-24  h-24 mx-auto -mt-12 bg-white px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-triangle"
          className="svg-inline--fa fa-exclamation-triangle fa-w-18"
          role="img"
          viewBox="0 0 576 512"
        >
          <path
            fill="#9ca3af"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          />
        </svg>
      </div>
      <div className="`p-4 pb-6 ">
        <p>
          This tool is for use in adults defined as individuals 18 years of age
          or older and not by younger people, or pregnant or breastfeeding
          women.
        </p>
        <p>
          This information is not intended to provide medical advice. A health
          care provider who has examined you and knows your medical history is
          the best person to diagnose and treat your health problem.
        </p>
        <p>
          If you have specific health questions, please consult your health care
          provider.
        </p>
      </div>
    </article>
  )
}
