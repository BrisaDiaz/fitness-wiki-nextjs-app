import Head from 'next/head';
import Image from 'next/Image';
import getConfig from 'next/config';
import mockRecipeById from '../../mocks/mockRecipeById';
import mockEquipament from '../../mocks/mockEquipament';
import mockInstructions from '../../mocks/mockInstructions';
import mockGessNutrition from '../../mocks/mockGessNutrition';
import RecipeHeader from '../../components/RecipeHeader';
import ListSheet from '../../components/ListSheet';
import ListSheetItem from '../../components/ListSheetItem';
import RecipeDirections from '../../components/RecipeDirections';


const { publicRuntimeConfig } = getConfig();



export default function Recicipe(props) {

  let recipe, instructions, equipment, nutrition ,ingredients;

  if(props.serverError || !props.recipe){

  recipe  =mockRecipeById,
  instructions= mockInstructions[0].steps
   equipment=mockEquipament.equipment
   nutrition =mockGessNutrition
   ingredients=mockRecipeById.extendedIngredients


  }else {
  recipe  = props.recipe
  instructions= props.instructions
   equipment= props.equipment
   nutrition = props.nutrition
   ingredients= props.ingredients

  }




  const hederInfo = [
    { label: 'servers:', info: recipe?.servings, image: '/utensils-solid.svg' },
    {
      label: 'prep time:',
      info: ` ${recipe?.readyInMinutes}min`,
      image: '/clock-regular.svg',
    },
    {
      label: 'energy:',
      info: ` ${nutrition?.calories?.value} Kcal`,
      image: '/heartbeat-solid.svg',
    },
    {
      label: 'diets:',
      info:
        recipe?.diets?.length > 0 ? recipe?.diets?.join(' - ') : 'unspecified',
      image: '/seedling-solid.svg',
    },
  ];
  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content="recipe ingredients,process" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-1 flex flex-col items-center mb-10">
        <h1 className="text-center text-3xl font-bold sm:text-4xl my-8 text-green-400  ">
          {recipe.title}
        </h1>

        <RecipeHeader hederInfo={hederInfo} />

        <section className="mx-auto px-1 sm:px-0  gap-0 max-w-6xl  flex flex-col-reverse sm:flex-row  w-full sm:justify-evenly ">
          <section className="  p-2 sm:p-4  w-full border rounded border-gray-200 shadow-lg">
            <div   className="mx-auto w-full max-w-3xl sm:py-1 relative h-auto">
            <Image
              className="rounded-md"
              width={800}
              height={500}
      layout='responsive'
               unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
              src={recipe?.image}
              alt={recipe?.title}
            />
            </div>
            <RecipeDirections steps={instructions} />
          </section>
          <section className="mb-10 sm:mb-0 px-0 w-full sm:px-2 sm:w-5/12	 md:w-96 lg:w-2/5 mx-auto">
            <ListSheet title="Ingredients">
              {ingredients?.map(ingredient => (
                <ListSheetItem
                  key={ingredient?.id}
                  name={ingredient?.name}
                  info={`${ingredient?.name} ${ingredient?.measures?.metric?.amount} ${ingredient?.measures?.metric?.unitShort}`}
                />
              ))}
            </ListSheet>
            <div className="mt-3" />
            <ListSheet title="equipment">
              {equipment?.map(equip => (
                <ListSheetItem
                  className="mt-3"
                  key={equip?.name}
                  name={equip?.name}
                  info={equip?.name}
                />
              ))}
            </ListSheet>
          </section>
        </section>
      </main>
    </>
  );
}

// export async function getStaticPaths() {
//   const IdsUrl =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`
//   const config=  {
//       method: 'GET',
//       credentials: 'include',

//     }

// const response = await   fetch(IdsUrl,config)
// const json = await response.json()
// const data = json.results;

// const paths = data.map(recipe => ({
//         params: { id: recipe.id.toString() },
//       }));

//   return { paths, fallback: true };

// }

// export async function getStaticProps({ params }) {
//     const recipeUrl = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${publicRuntimeConfig.API_KEY}&addRecipeInformation=true`;


//     const equipmentUrl =`https://api.spoonacular.com/recipes/${params.id}/equipmentWidget.json?apiKey=${publicRuntimeConfig.URL_AUTH}`


//   const [recipeResponse,equipmentResponse] = await Promise.all([fetch(recipeUrl),fetch(equipmentUrl)])
//   const recipe = await recipeResponse.json()
//   const equipment = await equipmentResponse.json()

//  const nutritionUrl =`https://api.spoonacular.com/recipes/guessNutrition?apiKey=${publicRuntimeConfig.API_KEY}&title=${recipe.title}`

//   const nutritionResponse= await fetch(nutritionUrl)
//   const nutrition= await nutritionResponse.json()

// if(!recipeResponse.ok || !nutritionResponse.ok || !equipmentResponse.ok){

//   return{
//   props:{
// serverError:true,

//   }

// }
// }
//   return{
//     serverError:false,
//     recipe,
//     equipment,
//     nutrition,
//     ingredients:recipe.extendedIngredients,
//     instructions:recipe.analyzedInstructions[0].steps
//   }





// }
