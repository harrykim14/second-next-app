import Layout from "../components/Layout";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import { VscTriangleDown } from "react-icons/vsc";

const color = () => {
  return (
    <Layout title="Color">
      <div>
        <Grid container className="m-4">
          <Grid item container xs={4} className="flex">
            <Grid item xs={12} className="flex justify-center top-0">
              <button className="text-3xl font-bold px-4 m-2 rounded h-16 cursor-default border-4 border-yellow-900">
                서러브레드의 일생
              </button>
            </Grid>
            <Grid
              item
              xs={12}
              className="p-4 h-screen text-center justify-center items-center text-2xl"
            >
              교배(種付け)
              <VscTriangleDown className="m-auto" />
              태어남
              <VscTriangleDown className="m-auto" />
              젖떼기
              <VscTriangleDown className="m-auto" />
              기초체력 단련
              <VscTriangleDown className="m-auto" />
              재갈, 뱃대끈, 장제, 승마 길들이기 등의 조교
              <VscTriangleDown className="m-auto" />
              트레이닝 센터로 들어감
              <VscTriangleDown className="m-auto" />
              데뷔
              <VscTriangleDown className="m-auto" />
              레이스
              <VscTriangleDown className="m-auto" />
              은퇴
            </Grid>
          </Grid>
          <Grid item container xs={8}>
            <Grid
              item
              xs={6}
              className="flex flex-col justify-center items-center"
            >
              <button className="bg-yellow-900 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                갈색(鹿毛)
              </button>
              <div>
                <Image
                  src="/images/basic/gran_alegria_640.jpg"
                  width={640}
                  height={480}
                  alt="dear brown colored horse"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="bg-gray-900 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                흑록색(黒鹿毛)
              </button>
              <Image
                src="/images/basic/stella_velocie_640.jpg"
                width={640}
                height={480}
                alt="blue black colored horse"
              />
            </Grid>
            <Grid
              item
              xs={6}
              className="flex flex-col justify-center items-center"
            >
              <button className="bg-green-900 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                청록색(青鹿毛)
              </button>
              <Image
                src="/images/basic/cool_cat_640.jpg"
                width={640}
                height={480}
                alt="blue black colored horse"
              />
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="bg-blue-900 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                청흑색(青毛)
              </button> 
              <Image
                src="/images/basic/cesario_640.jpg"
                width={640}
                height={480}
                alt="blue black colored horse"
              />
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="bg-gray-400 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                회백색(芦毛)
              </button>
              <Image
                src="/images/basic/smile_kana_640.jpg"
                width={640}
                height={480}
                alt="gray colored horse"
              />
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="bg-yellow-600 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                밤색(栗毛)
              </button>
              <Image
                src="/images/basic/ho_o_amazon_640.jpg"
                width={640}
                height={480}
                alt="chest-nut colored horse"
              />
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="bg-yellow-900 text-white text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                진한밤색(栃栗毛)
              </button>
              <Image
                src="/images/basic/sakura_laurel_640.jpg"
                width={640}
                height={480}
                alt="dark chest-nut colored horse"
              />
            </Grid>
            <Grid item xs={6} className="flex flex-col justify-center items-center">
              <button className="border-4 border-black-900 text-black text-4xl font-bold px-4 m-2 rounded h-16 cursor-default">
                흰색(白毛)
              </button>
              <Image
                src="/images/basic/sodashi_640.png"
                width={640}
                height={480}
                alt="white colored horse"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default color;
