## 前端开发环境基本配置 —— Mac 篇

以下设置针对在 Mac 下做开发，特别是前端开发的小伙伴做参考。在此之前，我们需要调整一下系统的一些默认设置，用来提高操控效率。

打开 System Preferences(系统偏好设置) > Keyboard(键盘) > Shortcuts(快捷键)，选中 All controls(所有控制)，好了，现在我们可以用 `tab` 键进行焦点切换，用全键盘控制对话框了。

再去鼠标、触摸板的设置里，将所有的勾都打上，Mac 为我们设置的这么多快捷操作，不用岂不可惜！

操作层面解决了，下面我们来配置一些工具：

### 1. Xcode 工具安装
如果有原生开发需要，安装 `Xcode` 是不二选择，从 [Mac App Store](https://itunes.apple.com/cn/app/xcode/id497799835) 中免费下载即可，否则的话，我们只需安装 “Command Line Tools” 即可，在终端窗口键入以下命令：
```
xcode-select --install
```
### 2. Homebrew 安装
[HomeBrew](http://brew.sh/) 是 Mac 下应用最为广泛的套件管理工具，仍然在终端安装该工具：
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

接下来，通过 HomeBrew 来安装我们开发常用的一些工具和环境，常用的有：

- __git__ - 代码版本管理工具
- __node__ - Nodejs 环境
- __ccat__ - cat 增强命令
- __mongodb__ - 要做全栈的话，装吧
- __vim__ - 要做 geek 的话，装吧
- ...

用 HomeBrew 来安装以上工具很简单，不用一个个的到其官网下载安装包了，一行命令搞定：
```
brew install git node ccat mongodb vim
```
HomeBrew 还有个精致的扩展 [Homebrew Cask](https://caskroom.github.io/)，安装方式如下：
```
brew tap caskroom/cask
```

安装完 cask 后，可以用它通过命令行来快速安装一些 APP 了。以下是一些前端开发工作中常用的开发工具：

- __Atom__ 开源的前端 IDE，
- __Google-Chrome__ 那啥，不解释
- __Iterm2__ 系统终端替代工具，必装！
- __Dash__ 开发文档查询工具
- __Alfred__ 逆天工具，当然，那是在付费了的情况下
- ...

安装命令如下：
```
brew cask install atom google-chrome iterm2 dash alfred
```

以上工具可以择需安装，如有其他需要，还能通过 `brew cask search keyword` 来搜索是否有可安装之 APP。

### 3. Oh My ZSH! 安装
这是一个原生终端 bash 的替代品，对于需要经常在 terminal 上做操作的同学来说，效率可以大大提高，安装命令如下：
```
# via curl
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

#via wget
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
可以说 [Oh-My-ZSH](http://ohmyz.sh/) + iTerm2 两者结合，是 Mac 环境下命令行的最佳拍档，当然，如果你有许多机会用 ssh 做远程登录，再加上 [tmux](http://tmux.github.io/) (一个优秀的终端复用软件)这件利器，那就更上一层楼了！同样的，tmux 也可以通过 `brew install tmux` 命令来快速安装，其用法可以去官网文档查看，这里就不多解释了。

### 4. npm 优化配置
安装完 Nodejs 后，其自带的包管理工具 npm 是我们需要经常用到的，但是其默认安装源是国外的 server 地址，由于众所周知的原因，很多时候由于网络环境的影响，造成包安装异常，甚至失败。因此，在国内的话，建议配置使用淘宝镜像源：

1. 方法一，安装 cnpm 代替 npm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

2. 方法二，直接修改 npm 的源
```
npm set registry https://registry.npm.taobao.org/
```

这样配置后 NPM 包安装的速度将大大提高。

### 5. Oh My ZSH! 配置
利器装完后，对其进行适当的配置，能使你的工作效率锦上添花。编辑文件 `~/.zshrc`，我们可以为其自定义个性化主题以及配置插件。

- 主题定义
找到 `ZSH_THEME=` 这行，从[主题列表](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes)里选择一款自己中意的吧，我选的是 "gianu"，按以下方式编辑该行内容即可。
```
ZSH_THEME="gianu"
```

- 插件定义
可以从[插件列表页面](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview)查看内置插件列表，捡自己合适的选呗，选完后，注意查找 `.zshrc` 文件里开头为 `plugins=` 那行，把插件名称写入，之后，终端会自动开启开插件，例如：
```
plugins=(git autojump colored-man common-aliases npm)
```

- 设置别名
我们之前用 HomeBrew 安装了 cat 的增强版 ccat，可以在这个配置文件里添加一行：
```
alias cat="ccat"
```
OK，这下，我们每次使用 cat 命令就等于使用了 ccat，多么的…… 偷梁换柱！

在这里特别说一下这个 git 插件，让经常写 git 命令的我感觉如鱼得水，各种简写，效率飞升啊。查看 [Plugin:git](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git) 感受一下吧。

### 6. Atom 配置
Github 出品的这款开源 IDE，已成为了我的首选。Atom 提供了命令行工具，在某个项目路径下，键入 `atom .` 即可唤出 Atom 并打开该项目。

命令行工具还提供了 `apm` 命令管理其插件和主题包，好的插件可以愉悦你的编码体验，分享以下我自己正在使用的一些插件：

- __atom-beautify__
代码格式化工具，特点是支持的文件格式够多。
- __atom-ternjs__
JS代码智能提示补全。
- __autocomplete-paths__
自动提示文件路径，这在文档里写 link 或图片路径的时候非常有用。
- __color-picker__
一个颜色选择器，点开右键呼出色盘，写 css 时调色比较方便。
- __emmet__
这个太有名了，前身就是 "zen-coding"，快速编写 HTML & CSS 代码的工具。
- __file-icons__
给不同类型的文件分配他们自己的类型图标，给人以醒目的提示。
- __highlight-selected__
双击一个变量或单词，通篇代码里与其相同的代码都会高亮，debug 时非常好用。
- __linter & linter-eslint__
这两个插件让我们可以实时对自己的 js 代码进行语法和格式的校验和检查。
- __merge-conflicts__
当使用 `git merge` 进行分支合并产生冲突时，该插件可以很快速的定位冲突的文件及冲突位置，解决 conflicts。
- __minimap__
文档代码的缩略小地图。
- __minimap-find-and-replace__
小地图里高亮所有相同选择的位置。
- __open-recent__
在 File 菜单里增加最近打开的文件和项目的功能。
- __pigments__
通过底色显示当前所示颜色代码的真实色彩，并能在命令面板(Ctrl + P) 中键入 `Pigments: Find Colors` 索引整个项目使用过的颜色进行选择。
- __remote-sync__
与远程机器做文件同步，支持 FTP/SCP/SFTP 等协议。
- __termination__
在 Atom 中打开终端窗口，方便项目运行。
- __tree-view-git-status__
在左侧文档树中显示当前 git 分支、代码迁入状况的插件，实用！

复制并执行以下命令，快速安装以上所有插件：
```
apm install atom-beautify atom-ternjs autocomplete-paths color-picker emmet file-icons highlight-selected linter linter-eslint merge-conflicts minimap minimap-find-and-replace open-recent pigments remote-sync termination tree-view-git-status
```
