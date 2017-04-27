## 前端开发环境基本配置 —— Windows 篇

Windows 篇来源于Mac 篇，配置过程大致相同，但是需要注意2点：1.Windows默认并未安装Python，2.Windows版本node编译依赖MSBuild。

下面我们来配置一些工具：

### 1. Python 安装
请前往[Python 官网](https://www.python.org/)下载安装， 推荐使用Python27版本。

### 2. MSBuild 安装
[MSBuild]来自于微软开发工具Visual Studio套件，请自行前往[微软官网](https://www.visualstudio.com/)下载，安装express版本即可。但要注意安装完成后需要在命令行工具中配置来指定MSBuild使用的版本：
```
安装vs2015请配置：set GYP_MSVS_VERSION=2015
安装vs2015 express请配置：set GYP_MSVS_VERSION=2015e
安装vs2013请配置：set GYP_MSVS_VERSION=2013
安装vs2013 express请配置：set GYP_MSVS_VERSION=2013e
...
```

### 3. nodejs 安装
请前往[nodejs官网](https://nodejs.org/en/)下载安装安装包，Windows版本nodejs包含了npm。

### 4. bower 安装
```
npm install bower -g OR --save-dev
```

### 5. npm 优化配置
请参考 Mac 篇

### 6. 命令行工具替代篇
推荐使用[ConsoleZ](https://github.com/cbucher/console/wiki/Downloads),完全可以替代windows自带的cmd.exe和Git Bash，可以更换字体、缩放字体、更改背景色或背景图片、设置透明度、复制+粘贴更不在话下，大大提升工作效率。

### 7. Atom 配置
请参考 Mac 篇
