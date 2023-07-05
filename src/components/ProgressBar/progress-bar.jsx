const ProgressBar = (props) => {
    const { bgcolor, completed, title } = props;
  
    const containerStyles = {
      height: 20,
      width: '500px',
      backgroundColor: "#252323",
      borderRadius: 50,
      margin: 50,
      marginLeft:"auto",
  
    }
    const progressContainerStyle = {
      display:"flex",
      alignItems:"center",
      height:50
    }
  
    const fillerStyles = {
      transition: 'width 1s ease-in-out',
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#ffd700",
      boxShadow: '0px 0px 13px 0px rgba(255, 215, 0,0.7)',
      borderRadius: 'inherit',
      textAlign: 'right',
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-end'
    }
  
    const labelStyles = {
      padding: 5,
      color: '#282C33',
      fontWeight: 'bold',
      fontSize:11
    }
    const titleStyle ={
      color:'rgba(255,255,255,0.7)'
    }
  
    return (
      <div style={progressContainerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </div>
    );
  };
  
  export default ProgressBar;
  