import subprocess
import sys

def generate_proto_files(proto_filename):
    # 调用 pbjs 命令生成 JavaScript 文件
    subprocess.run(['pbjs', '-t', 'static-module', '-w', 'commonjs', '-o', f'{proto_filename}.js', f'{proto_filename}.proto'], shell=True)

    # 调用 pbts 命令生成 TypeScript 文件
    subprocess.run(['pbts', '-o', f'{proto_filename}.d.ts', f'{proto_filename}.js'], shell=True)

    print(f'Successfully generated {proto_filename}.js and {proto_filename}.d.ts files.')

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('Usage: python proto_converter.py <proto_filename>')
        sys.exit(1)
        
    proto_filename = sys.argv[1].split('.')[0]
    generate_proto_files(proto_filename)