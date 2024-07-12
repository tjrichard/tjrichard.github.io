import { createClient } from '@supabase/supabase-js';

// 환경 변수가 제대로 설정되었는지 확인
const supabaseUrl = process.env.SUPABASEURL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or Key is not defined in environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const emojiShortName = async () => {
    let emoji = document.getElementById("submittedEmoji").value;
    console.log("입력된 이모지: ", emoji);
    
    const { data, error } = await supabase
      .from("emojis")
      .select("emoji, shortname")
      .eq("emoji", emoji)
  
    if (error) {
      console.error("Supabase 에러: ", error);
      return;
    }
    console.log("결과: ", data);
    return data;
};

async function getEmoji_shortName() {
    const result = await emojiShortName(); 
    console.log(result);
    let resultArea = document.getElementById("apiResponse");
    resultArea.innerText = result;
}

// DOM이 로드된 후 이벤트 리스너를 추가
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit').addEventListener('click', getEmoji_shortName);
});
