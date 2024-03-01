#!/usr/bin/env python3

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title 이미지 비율 계산기
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🏞️
# @raycast.argument1 { "type": "text", "placeholder": "예: 400:800" }
# @raycast.packageName Image ratio calculator

# Documentation:
# @raycast.description 입력받은 가로, 세로 값으로 비율을 출력합니다
# @raycast.author tjrichard91
# @raycast.authorURL https://raycast.com/tjrichard91

import sys

def find_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def calculate_ratio(width, height):
    gcd = find_gcd(width, height)
    ratio_width = width // gcd
    ratio_height = height // gcd
    return ratio_width, ratio_height

def show_result():
    input_str = sys.argv[1]
    try:
        width, height = map(int, input_str.split(':'))
        ratio_width, ratio_height = calculate_ratio(width, height)
        result_str = f"{ratio_width}:{ratio_height}"
        print(result_str)
    except ValueError:
        print("입력한 값을 다시 확인해주세요")
    except Exception as e:
        print(f"에러 발생: {e}")

# 스크립트 실행
show_result()
