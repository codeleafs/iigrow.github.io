

shell 在执行某个命令的时候会返回一个值，该返回值保存在$?中，$? === 0时表示执行成功，否则表示失败。
    // 命令连接 & 时，后台执行
    command1 &
    // & 连接命令时，右边命令不需要左边命令返回值，直接执行
    command1 & command2 [&command3]
    // && 连接命令时，左边执行结果为真时，右边命令才会执行
    command1 && command2 [&& command3]
    // || 连接命令时，左边执行结果为假时，右边命令才执行
    command1 || command2 [|| command3]