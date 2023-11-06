class DateFormatter {
    static getTimeDiffString(timestamp) {
      const now = new Date().getTime();
      const diff = now - timestamp;
  
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      if (seconds < 60) {
        return 'Just now';
      } else if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (days === 1) {
        return 'Yesterday at ' + this.formatTime(timestamp);
      } else if (days < 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else {
        return this.formatDate(timestamp) + ' at ' + this.formatTime(timestamp);
      }
    }
  
    static formatDate(timestamp) {
      const date = new Date(timestamp);
      return (
        date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
      );
    }
  
    static formatTime(timestamp) {
      const date = new Date(timestamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours %= 12;
      hours = hours || 12; 
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return hours + ':' + minutes + ampm;
    }
}
